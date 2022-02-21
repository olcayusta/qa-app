import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ISearchResult, SearchService } from '@shared/services/search.service';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger
} from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  myControl = new FormControl();
  filteredQuestions!: Observable<ISearchResult[]>;

  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger })
  autoComplete!: MatAutocompleteTrigger;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.filteredQuestions = this.myControl.valueChanges.pipe(
      filter((value) => value.length > 0),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchQuestion(term))
    );
  }

  /*  displayFn(question: Question): string {
    return question && question ? question.title : null;
  }*/

  displayFn(value: any): string {
    return value ? value.title || value.displayName : null;
  }

  async selectedOption($event: MatAutocompleteSelectedEvent): Promise<void> {
    if ($event.option.group.label === 'Sorular') {
      await this.router.navigateByUrl(`/question/${$event.option.value.id}`);
    }

    if ($event.option.group.label === 'Kullanıcılar') {
      await this.router.navigateByUrl(`/user/${$event.option.value.id}`);
    }

    if ($event.option.group.label === 'Etiketler') {
      await this.router.navigateByUrl(`/tag/${$event.option.value.id}`);
    }
  }

  closeAutocomplete() {
    this.autoComplete.closePanel();
  }

  async onEnter($event: any) {
    $event.preventDefault();
    this.autoComplete.closePanel();
    await this.router.navigate(['search'], {
      queryParams: {
        q: 'json'
      }
    });
    // this.closeAutocomplete();
  }

  searchWithAudio() {
    //@ts-ignore
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

    //@ts-ignore
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
      console.log('voice is activated!');
    };

    recognition.onresult = (e: any) => {
      console.log(e);
      const current = e.resultIndex;
      const transcript = e.results[current][0].transcript;
      console.log(transcript);
    };

    setTimeout(() => {
      recognition.start();
    }, 1000);
  }
}

/*
@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [SearchFormComponent],
})
export class SearchFormModule {}
*/
