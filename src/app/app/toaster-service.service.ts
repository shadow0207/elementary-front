import { Injectable } from '@angular/core';

declare var toastr: any;
@Injectable()
export class ToasterServiceService {

  constructor() { 
    this.setting();
    
  }

  success(title: string, message?: string) {
    toastr.success(title, message);
  }

  error(title: string, message?: string) {
    toastr.error(title, message);
  }


   warning(title: string, message?: string) {
    toastr.warning(title, message);
  } 
  
  info(title: string, message?: string) {
    toastr.info(title, message);
  }
  setting()
  {
    toastr.options = {
      "closeButton": true,
      "debug": true,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-bottom-right",
      "preventDuplicates": false,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "10000",
      "extendedTimeOut": "20000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
}
