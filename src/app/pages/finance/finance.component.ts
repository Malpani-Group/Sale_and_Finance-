import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;

  fileUploadForm: FormGroup;
  fileInputLabel: string;
  message : string;
  submitSpspinner = false;

  constructor( private http : HttpClient, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }



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
      .post<any>('http://www.pratik.somee.com/api/Finances', formData).subscribe(response => {
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
