/*
 * File: app/view/CompanyGrid.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Example.view.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.companygrid',

    height: 300,
    width: 600,
    title: 'My Grid Panel',
    store: 'Companies',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'company',
                    flex: 1,
                    text: 'Company'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'price',
                    text: 'Price'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'change',
                    text: 'Change'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'pctChange',
                    text: 'PctChange'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'lastChange',
                    text: 'LastChange'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'print',
                            iconCls: 'icon-print',
                            text: 'Print'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});