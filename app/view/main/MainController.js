/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
            this.getView().getViewModel().set('name', "修改后的title");
        }
    },
    // 选择了主菜单上的菜单后执行
    onMainMenuClick: function(menuitem) {
        console.log(menuitem);
        Ext.toast({

            html: 'Data Saved , hello  this is a meessage',
            title: menuitem.text,
            saveDelay: 10,
            align: 'tr',
            closable: true,
            width: 200,
            useXAxis: true,
            slideInDuration: 500
        });
    },
    hiddenTopBottom: function(argument) {
        // body...  
        this.getView().down('maintop').hide();
        this.getView().down('mainbottom').hide();

        if (!this.showButton) { // 显示顶部和底部的一个控件，在顶部和底部隐藏了以后，显示在页面的最右上角  
            this.showButton = Ext.widget('component', {
                glyph: 0xf013,
                view: this.getView(),
                floating: true,
                x: document.body.clientWidth - 32,
                y: 0,
                height: 4,
                width: 26,
                style: 'background-color:#cde6c7',
                listeners: {
                    el: {
                        click: function(el) {
                            var c = Ext.getCmp(el.target.id); // 取得component的id值  
                            c.view.down('maintop').show();
                            c.view.down('mainbottom').show();
                            c.hide();
                        }
                    }
                }
            })
        };
        this.showButton.show();
    }
});