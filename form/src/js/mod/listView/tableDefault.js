define(function (require, exports, module) {

    //����tableView�����һЩͨ������

    var TableDrag = require('mod/listView/tableDrag'),
        TableOrder = require('mod/listView/tableOrder');

    return {
        plugins: [
            {
                plugin: TableDrag,
                name: 'tableDrag'
            },
            {
                plugin: TableOrder,
                name: 'tableOrder'
            }
        ]
    }
});