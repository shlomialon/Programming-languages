var app = new Vue({
    el: '#app',
    data: {
        items: [
            {
                text: 'line 1',
                activity: false
            },
            {
                text: 'line 2',
                activity: true
            }
        ],
        selectedItem: null,
        newItemText: ""
    },
    methods: {
        addToList: function () {
            if (this.items.indexOf(this.newItem) < 0) {
                this.items.push({
                    text: this.newItemText,
                    activity: false
                })
            }
            this.newItem = {text: null}
        },
        selectItemEdit: function (item) {
            this.selectedItem = item;
        }
    }
});