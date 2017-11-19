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
            this.newItem = {text: null};
        },
        selectItemEdit: function (item) {
            this.selectedItem = item;
        },
        changeStatus: function () {
            if(this.selectedItem.activity){
                this.selectedItem.activity = false;
            }else {
                this.selectedItem.activity = true;
            }
        }
    },
    created : function () {
        console.log('data:', this.$data);
    }
});
