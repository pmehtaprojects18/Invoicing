import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataStorageService{

    constructor(private dataStorage:Storage){

    }
    public saveData(key:string,value:object):Promise<any>{
        return this.dataStorage.set(key,value);
    }

    public getData(key:string):Promise<any>{
        return this.dataStorage.get(key);
    }

    public updateData(key:string,value:object):Promise<any>{
        return new Promise((resolve,reject) => {
            let data = this.dataStorage.get(key).then(val => {
                resolve();
            }).catch(err =>{
                reject(err);
            });
        });
    }
}