import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { MayestroService } from '../mayestro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private service: MayestroService,
    private route: ActivatedRoute) { }

    MyPlaylist:any[];
  ngOnInit() {
    this.service.getMyPlaylists()
      .subscribe(
        (data:any[]) =>{
          this.MyPlaylist=data;
        }
      );
  }
/**
 * opens the dialogue box
 */
  openDialog(){
    
    this.dialog.open(DialogComponent);

  }

}
