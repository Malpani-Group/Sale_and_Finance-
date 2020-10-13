import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  // @ViewChild('fileInput') fileInput;
  // message: string;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  message : string;
  submitSpspinner = false;

  constructor(private http : HttpClient , private service: SaleService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }

  // uploadFile() {
  //   let formData = new FormData();
  //   formData.append('upload', this.fileInput.nativeElement.files[0]);
  //      this.service.UploadExcel(formData).subscribe(result => {
  //     this.message = result.toString();
  //     console.log(result);
  //   },err=>{
  //     console.log(err);
  //   });

  // }


  onFileSelect(event) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);

          this.fileInputLabel = file.name;
        this.fileUploadForm.get('myfile').setValue(file);

    }
  }

  onFormSubmit() {

    if (!this.fileUploadForm.get('myfile').value) {
      alert('Please fill valid details!');
      return false;
    }

    const formData = new FormData();
    formData.append('formFile', this.fileUploadForm.get('myfile').value);
    // formData.append('agentId', '007');

  this.submitSpspinner = true
    this.http
      .post<any>('http://www.pratik.somee.com/api/Sales', formData).subscribe(response => {
        this.message = response.toString();
        console.log(response);
        if (response.statusCode === 200) {
          // Reset the file input
          this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = undefined;
        }
        this.submitSpspinner = false;
      }, error => {
        this.submitSpspinner = false;
        console.log(error);
      });
  }



  OnHandlePopup(){
    this.message = null;
  }




}
