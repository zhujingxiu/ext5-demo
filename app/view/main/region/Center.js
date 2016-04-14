/**
 * 系统界面的主区域,是一个tabpanel,可以有多个tab页面，用来放置各个模块。
 */
Ext.define('app.view.main.region.Center', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.maincenter',
	closeAction : 'hide',
	autoDestroy : false,
	tabPosition : 'top',

	plugins : [{

		ptype : 'tabclosemenu',
		closeAllTabsText : '关闭所有',
		closeOthersTabsText : '关闭其他',
		closeTabText : '关闭',

		extraItemsTail : ['-', {
					text : '可关闭',
					itemId : 'canclose',
					checked : true,
					hideOnClick : false,
					handler : function(item) {
						item.ownerCt.tabPanel.tab.setClosable(item.checked);
					}
				}, '-', {
					text : '登录时自动打开',
					itemId : 'autoopen',
					checked : false,
					hideOnClick : false,
					handler : function(item) {
						if (item.checked)
							Jfok.system.addModuleToAutoOpen(item.ownerCt.tabPanel.moduleName);
						else
							Jfok.system
									.deleteModuleToAutoOpen(item.ownerCt.tabPanel.moduleName);
					}
				}, '-', {
					xtype : 'fieldcontainer',
					items : {
						xtype : 'numberfield',
						fieldLabel : '最多打开Tab数',
						itemId : 'maxtab',
						width : 156,
						value : 8,
						maxValue : 20,
						minValue : 3,
						listeners1 : {
							change : function(field, newValue, oldValue) {
								Jfok.system.setMaxTab(newValue);
							}
						}
					}
				}],
		listeners : {
			beforemenu : function(menu, tabPanel) {
				// 此插件有bug,需要加入这个参数
				menu.tabPanel = tabPanel;
				if (tabPanel.tab.reorderable) {
					menu.down('#canclose').setChecked(tabPanel.tab.closable);
					menu.down('#canclose').enable();
				} else {
					menu.down('#canclose').setChecked(false);
					menu.down('#canclose').disable();
				}
				// 如果是有parentFilter的模块，那么自动打开的菜单条隐掉 ，上面的'-'也隐掉
				menu.down('#autoopen').setVisible(!tabPanel.parentModuleName);
				menu.down('#autoopen').previousSibling()
						.setVisible(!tabPanel.parentModuleName);

				menu.down('#autoopen').setChecked(false);// Jfok.system
				// .isModuleAutoOpen(tabPanel.moduleName));
				menu.down('#maxtab').setValue(8);// Jfok.system.getMaxTab());
			}
		}
	}, Ext.create('Ext.ux.TabReorderer')],

	initComponent : function() {

		this.items = [{
					glyph : 0xf015,
					title : '首页',
					border : true,
					frame : false,
					bodyCls : 'panel-background',
					reorderable : false,
					layout : 'fit',
					items : [{
								xtype : 'panel',
								border : false,
								frame : false
							}]
				}, {
					title : '工程管理',
					closable : true,
					reorderable : true
				}, {
					title : '工程合同',
					closable : true,
					reorderable : true
				}]
		this.callParent();
	}

})