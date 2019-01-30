import { Component, OnInit, OnDestroy } from '@angular/core';
import { VCService } from './VC.service';

@Component({
  selector: 'app-vc',
  templateUrl: './VC.component.html',
  styleUrls: ['./VC.component.scss']
})
export class VCComponent implements OnInit, OnDestroy {
  showSearchButton: boolean;
  speechData: string[];

  constructor(private speechRecognitionService: VCService) {
    this.showSearchButton = true;
    this.speechData = [];
  }
  ngOnInit() {}

  ngOnDestroy() {
    this.stopSpeechSearchMovie();
  }

  stopSpeechSearchMovie() {
    this.showSearchButton = true;
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record().subscribe(
      value => {
        this.speechData.push(value);
        console.log(value);
      },
      err => {
        console.log(err);
        if (err.error === 'no-speech') {
          console.log('--restatring service--');
          this.activateSpeechSearchMovie();
        }
      },
      // completion
      () => {
        this.showSearchButton = true;
        console.log('--complete--');
      }
    );
  }
}
