import { Component, Input, Output } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  uploadedFiles: any = [];
  openImageDialog: boolean = false;
  filePreview: string = '';
  @Input() files: any[] = [];
  @Output() selectedFiles: any[] = [];

  ngOnInit(): void {
  }

  droppedFileList(event: any): void {
    event.preventDefault();
    this.setUploadedFiles(event.dataTransfer.files);
  }

  uploadedFileList(event: any): void {
    this.setUploadedFiles(event.target.files);
  }

  setUploadedFiles(fileList: any): void {
    Array.from(fileList).forEach((element: any) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(element);
      fileReader.onload = (event: any) => {
        let files = {
          preview: event.target?.result,
          name: element.name,
          size: this.transform(element.size),
          progress: event.loaded / event.total * 100
        }
        this.uploadedFiles.push(files);
      }
    });
    setTimeout(() => {
      console.log('uploadedFiles', this.uploadedFiles);
    }, 50);
  }

  transform(size: number): string {
    if (size === 0) {
      return '0 Bytes';
    }

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));

    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  viewFullImage(filePreview: string): void {
    this.filePreview = filePreview;
    this.openImageDialog = true;
  }

  removeFile(file: any): void {
    let index = this.uploadedFiles.indexOf(file);
    this.uploadedFiles.splice(index, 1);
    console.log('uploadedFiles', this.uploadedFiles);
  }
}
