import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  college: {
    profile: {
      college_name: string,
      contact_person: {
        name: string,
        title: string,
        position: string
      }
    },
    contact: {
      city: string, 
      address: string, 
      province: string,
      telephone: string,
      fax: string,
      email: {
        email_adrress: string
      }
      website: string,
      postal: string
  },
    reg_num: string, 
    qualifications: {
      qualification_id: number,
      qualification_name: string,
      nqf_level: number,
      credit: number,
      type: string
    }, 
    language: boolean, biography: boolean, projects: boolean
  };
  constructor() { }
}
