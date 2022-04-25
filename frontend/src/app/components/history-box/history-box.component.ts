import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-box',
  templateUrl: './history-box.component.html',
  styleUrls: ['./history-box.component.css']
})
export class HistoryBoxComponent implements OnInit {
  @Input() num_id: String;
  @Input() photo: String;
  @Input() workout_name: String;
  constructor() {
    this.num_id = "";
    this.photo = "";
    this.workout_name = "";
  }

  openArea() {
    var el = <HTMLElement>document.getElementById('message_' + this.num_id)
    console.log(el.style.display)
    if (<String>el.style.display === 'block') {
      el.style.display = 'none';
      var btn = <HTMLElement>document.getElementById('close_btn_' + this.num_id)
      btn.className = 'openRotate'
    } else {
      el.style.display = 'block';
      var btn = <HTMLElement>document.getElementById('close_btn_' + this.num_id)
      btn.className = 'closeRotate'
    }
  }
  ngOnInit(): void {
  }

}
