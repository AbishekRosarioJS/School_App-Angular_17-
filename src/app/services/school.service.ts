import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable ,BehaviorSubject,Subject,catchError,map, scan, shareReplay, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  deleteUser(deleteUserUrl: string) {
    throw new Error('Method not implemented.');
  }

  public openFileManager = new BehaviorSubject<any>(null);
  public isOpenFileManger = this.openFileManager.asObservable();

  public onHoverEditorLink = new BehaviorSubject<any>(null);
  public hoveredLink=this.onHoverEditorLink.asObservable() ;

  public apiMessage  = new BehaviorSubject<any>(null);
  public getApiMessage  = this.apiMessage.asObservable();

  private error$ = new Subject<any>();
  public errorObservable$ = this.error$
  .asObservable()
  .pipe(scan((acc,curr)=>(acc=acc.concat(curr)),[]));
  public baseLink:string = "http://localhost:8080/";
  constructor(
    private http : HttpClient
  ) { }



//Http Headers

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${sessionStorage.getItem('')}`
  }),
};

onPostMethodSync(UrlLink:string,ReqObj:any):Observable<any>{
  return this.http
  .post<any>(UrlLink,ReqObj,this.httpOptions)
}

onGetMethodOptionalSync(UrlLink:string,ReqObj:any):Observable<any>{
const options:any ={
  headers:this.httpOptions,
  body:ReqObj,
};
return this.http
 .get<any>(UrlLink,options)
 .pipe(shareReplay(),catchError(this.handleError));
}

onGetMethodSync(UrlLink:string):Observable<any>{
  return this.http
  .get<any>(UrlLink,this.httpOptions)
  .pipe(shareReplay(),catchError(this.handleError));
}

onPutMethodSync(UrlLink:string,ReqObj:any):Observable<any>{
  return this.http
  .put<any>(UrlLink,ReqObj,this.httpOptions)
  .pipe(shareReplay(),catchError(this.handleError))
}

onDeleteMethodSync(UrlLink:string):Observable<any>{
  return this.http
  .delete<any>(UrlLink,this.httpOptions)
  .pipe(shareReplay(),catchError(this.handleError));
}

async onGetMethodAsync(UrlLink:string):Promise<Observable<any>>{
  return this.http
  .get<any>(UrlLink,this.httpOptions)
  .pipe(shareReplay(),catchError(this.handleError)).toPromise();
}


//Error handling

handleError(error:any){
  return throwError(()=> error)
}

}