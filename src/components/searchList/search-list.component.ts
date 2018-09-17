import { Component, Input } from "@angular/core";


@Component({
    selector: 'search-list',
    templateUrl: 'search-list.component.html'
})

export class SearchListComponent {
    @Input() searchList: Array<any>;
    @Input() searchType: string;
    public itemList: Array<any> = [];

    ngOnInit() {
        if (this.searchList && Array.isArray(this.searchList)) {
            this.searchList.map(item => {
                switch (this.searchType) {
                    case "Customer":
                        this.itemList.push({ 'name': item.customeName, 'id': item.customerId });
                        break;
                    case "Product":
                        this.itemList.push({ 'name': item.customeName, 'id': item.customerId });
                        break;
                }
            });
        }
    }
}