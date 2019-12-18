import { Component, Inject, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { fromEvent, Subject } from 'rxjs';
import { mergeMap, finalize, takeUntil, first } from 'rxjs/operators';
@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnDestroy{
    private destroy$ = new Subject<void>();
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private http: HttpClient
      ) {}
    chooseAndUploadFile() {
        let fileInput = this.document.createElement('input');
        fileInput.type = 'file';
        fromEvent(fileInput, 'change')
          .pipe(
            first(),
            mergeMap(event => {
              const target = event.target as HTMLInputElement;
              const selectedFile = target.files[0];
              // formData обязательно в 2 строчки
              const uploadData = new FormData();
              uploadData.append('upload_file', selectedFile, selectedFile.name);
              console.log(selectedFile);
              console.log('fileInput = null');
              return this.http.post('http://localhost:5001/savefile', uploadData, {
                reportProgress: true, // Без observe: 'events' не работает
                observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
              });
            }),
            finalize(() => {
              // должен быть удален, т.к. счетчик ссылок обнулится
              fileInput = null;
              console.log('fileInput = null');
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(
            event => {
              // console.log(event);
              switch (event.type) {
                case HttpEventType.Sent:
                  console.log('Request sent!');
                  break;
                case HttpEventType.ResponseHeader:
                  console.log('Response header received!');
                  break;
                case HttpEventType.UploadProgress:
                  const kbLoaded = Math.round(event.loaded / 1024 / 1024);
                  const percent = Math.round((event.loaded * 100) / event.total);
                  console.log(
                    `Upload in progress! ${kbLoaded}Mb loaded (${percent}%)`
                  );
                  break;
                case HttpEventType.Response:
                  console.log('😺 Done!', event.body);
              }
            },
            () => console.log('Upload error'),
            () => console.log('Upload complete')
          );
        fileInput.click();
      }
      ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
      }
 }