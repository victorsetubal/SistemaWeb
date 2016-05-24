import { Component, Injectable } from 'angular2/core';

@Injectable()
export class TimeOutService {
    constructor () {}

    /**
     * PLACEHOLDER for files uploading
     *
     * @returns {Promise<T>}
     */
    public timeOut (): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 500)
        });
    }
}