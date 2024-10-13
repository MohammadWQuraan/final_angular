import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  

  transform(originalText: string, textToFind: string): any {
    if (!textToFind) {
      return originalText;
    }

    const pattern = textToFind
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      .split(' ')
      .filter((t: any) => t.length > 0)
      .join('|');

    const regex = new RegExp(pattern, 'gi');

    let result = originalText.replace(regex, (match: string) => `<span class='highlighter'>${match}</span>`);

    console.log('Transformed Text: ', result);
    
    return (result);
  }
}
