import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Batch} from '../dtos/batch';
import {BatchService} from '../services/batch.service';


@Component({
  selector: 'app-batch-detail-view',
  templateUrl: './batch-detail-view.component.html',
  styleUrls: ['./batch-detail-view.component.scss']
})
export class BatchDetailViewComponent implements OnInit {

  currentBatch: Batch = new Batch();

  constructor(private batchService: BatchService) { }

   ngOnInit(): void {
 
  }


  
}
