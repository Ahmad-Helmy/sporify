import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup ,FormControl} from '@angular/forms';
import { MayestroService } from '../mayestro.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form:any;
  PlaylistName:any;
  constructor( private service: MayestroService ,private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
    this.form= new FormGroup({
      newPlaylist:new FormControl(),
    })
  }
  /**
   * closes the  create playlist dialoge box
   */
  create(){
    this.dialogRef.close();
  }
  /**
   * creates a new playlist
   * @param f name of playlist to be created
   */
  submit(f){
    if(f.dirty){
      this.PlaylistName=f.value.newPlaylist;
      this.service.createPlaylist(this.PlaylistName).subscribe(
        resp=>{console.log(resp);}
      );
    }
  }
}
