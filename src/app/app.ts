import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Summary } from './summary/summary';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Achievements } from './achievements/achievements';
import { Education } from './education/education';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Summary,
    Experience,
    Skills,
    Achievements,
    Education,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-angular';
}
