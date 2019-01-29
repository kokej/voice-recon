import { Component, ViewEncapsulation } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET
} from '@angular/router';
import { BreadCrumb } from '../../../interfaces/breadCrumb';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './breadCrumbs.component.html',
  styleUrls: ['./breadCrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadCrumbsComponent {
  displayBreadcrumbList = [];
  route;
  masterBreadcrumbList;
  initialUrl;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const root: ActivatedRoute = this.activatedRoute.root;
        this.setBreadcrumb();
      }
    });
  }

  setBreadcrumb() {
    this.displayBreadcrumbList = [];
    if (location.pathname !== '') {
      this.route = location.pathname;
      this.masterBreadcrumbList = this.route.split('/');
      this.masterBreadcrumbList = this.masterBreadcrumbList.slice(
        1,
        this.masterBreadcrumbList.length
      );
      for (let i = 0; i < this.masterBreadcrumbList.length; i++) {
        if (i !== 0) {
          this.initialUrl = this.displayBreadcrumbList[i - 1];
        } else {
          this.initialUrl = {
            url: '/'
          };
        }
        const breadCrumbObj = {
          name: this.masterBreadcrumbList[i],
          url: this.initialUrl.url + '/' + this.masterBreadcrumbList[i],
          id: i
        };
        this.displayBreadcrumbList.push(breadCrumbObj);
      }
    } else {
      this.route = 'Home';
    }
  }
}
