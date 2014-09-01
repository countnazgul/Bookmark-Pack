var treeData1 = firstTreeData();
var treeData2 = secondTreeData();
var subTreeData = subTreeData();
$(function(){
 
   var tree2 = $('#tree2').niTree({treeData: treeData2}),
        $log2 = $('#log2');
    $('#btn_expand2').on('click', function(){
        tree2.niTree('expandAll');
    });
    $('#btn_collapse2').on('click', function(){
        tree2.niTree('collapseAll');
    });
    $('#btn_checked2').on('click', function(){
        $log2.prepend('[' + tree2.niTree('get', {selected: true}).join(', ') + ']\n');
    });
    $('#btn_checked_leafs2').on('click', function(){
        $log2.prepend('[' + tree2.niTree('get', {selected: true, leafsOnly: true}).join(', ') + ']\n');
    });
    $('#btn_unchecked2').on('click', function(){
        $log2.prepend('[' + tree2.niTree('get', {selected: false}).join(', ') + ']\n');
    });
    $('#btn_unchecked_leafs2').on('click', function(){
        $log2.prepend('[' + tree2.niTree('get', {selected: false, leafsOnly: true}).join(', ') + ']\n');
    });
tree2.niTree('collapseAll');
  
});


function firstTreeData(){
    return [
        {
            label: 'Node0 (html enabled: <a href="#">link tag</a>)',
            id: 'tree1_node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'Node0_1',
                    id: 'tree1_node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    }/*,
                 children: [
                 {
                 label: 'Node0_1_1',
                 id: 'tree1_node0_1_1',
                 attributes: {
                 'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                 'data-type': 'site_brand_list_child'
                 }
                 }
                 ]*/
                }
            ]
        },
        {
            label: 'Node1',
            id: 'tree1_node1',
            attributes: {
                'class': ['class_node1_a', 'class_node1_b'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'Node1_1',
                    id: 'tree1_node1_1',
                    attributes: {
                        'class': ['class_node1_1_a', 'class_node1_1_b', 'red_node'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node1_1_1',
                            id: 'tree1_node1_1_1',
                            attributes: {
                                'class': ['class_node1_1_1_a', 'class_node1_1_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'Node1_1_2',
                            id: 'tree1_node1_1_2',
                            attributes: {
                                'class': ['class_node1_1_2_a', 'class_node1_1_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'Node1_2',
                    id: 'tree1_node1_2',
                    attributes: {
                        'class': ['class_node1_2_a', 'class_node1_2_b', 'ni_tree_init_checked'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node1_2_1',
                            id: 'tree1_node1_2_1',
                            attributes: {
                                'class': ['class_node1_2_1_a', 'class_node1_2_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'Node1_2_2',
                            id: 'tree1_node1_2_2',
                            attributes: {
                                'class': ['class_node1_2_2_a', 'class_node1_2_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'Node1_3',
                    id: 'tree1_node1_3',
                    attributes: {
                        'class': ['class_node1_3_a'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node1_3_1',
                            id: 'tree1_node1_3_1',
                            attributes: {
                                'class': ['class_node1_3_1_a', 'class_node1_3_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'Node1_3_3',
                            id: 'tree1_node1_3_3',
                            attributes: {
                                'class': ['class_node1_3_2_a', 'class_node1_3_2_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'Node1_4',
                    id: 'tree1_node1_4',
                    attributes: {
                        'class': ['class_node1_4_a'],
                        'data-type': 'site_brand_list_child'
                    }
                }
            ]
        }
    ];
}

function secondTreeData() {
  return [
   {
            "children":[
               {
                  "dateAdded":1409539097095,
                  "id":"7",
                  "index":0,
                  "parentId":"8",
                  "label":"<a href='http://eu.battle.net/api/wow/realm/status'> eu.battle.net/api/wow/realm/status </a>",
                  "url":"http://eu.battle.net/api/wow/realm/status"
               },
               {
                  "dateAdded":1409539087135,
                  "id":"6",
                  "index":1,
                  "parentId":"8",
                  "label":"<a href='http://us.battle.net/api/wow/auction/data/medivh'>wow api</a>",
                  "url":"http://us.battle.net/api/wow/auction/data/medivh"
               },
               {
                  "dateAdded":1409539146455,
                  "id":"11",
                  "index":2,
                  "parentId":"8",
                  "label":"us.battle.net/api/wow/item/18803",
                  "url":"http://us.battle.net/api/wow/item/18803"
               },
               {
                  "dateAdded":1409539152942,
                  "id":"12",
                  "index":3,
                  "parentId":"8",
                  "label":"inv_gizmo_02.jpg (56&times;56)",
                  "url":"http://us.media.blizzard.com/wow/icons/56/inv_gizmo_02.jpg"
               },
               {
                  "dateAdded":1409539160606,
                  "id":"13",
                  "index":4,
                  "parentId":"8",
                  "label":"ExpressJS 4.0: New Features and Upgrading from 3.0 &hearts; Scotch",
                  "url":"http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0"
               },
               {
                  "dateAdded":1409539429516,
                  "id":"14",
                  "index":5,
                  "parentId":"8",
                  "label":"chrome extension api bookmarks - Google Search",
                  "url":"https://www.google.co.uk/search?q=chrome+extension+api+bookmarks&amp;oq=chrome+&hellip;ourceid=chrome&amp;es_sm=93&amp;ie=UTF-8#q=chrome+extension+api+bookmarks&amp;start=10"
               }
            ],
            "dateAdded":1409539114964,
            "dateGroupModified":1409539429516,
            "id":"8",
            "index":0,
            "parentId":"1",
            "label":"wowapi"
         },
         {
            "children":[
               {
                  "dateAdded":1409539128110,
                  "id":"9",
                  "index":0,
                  "parentId":"10",
                  "label":"google chrome extension - How do i access every bookmark item in order to select\\unselect them? - Stack Overflow",
                  "url":"http://stackoverflow.com/questions/8780084/how-do-i-access-every-bookmark-item-in-order-to-select-unselect-them"
               },
               {
                  "dateAdded":1409541213495,
                  "id":"15",
                  "index":1,
                  "parentId":"10",
                  "label":"Fancytree - Example Browser",
                  "url":"http://wwwendt.de/tech/fancytree/demo/"
               }
            ],
            "dateAdded":1409539140978,
            "dateGroupModified":1409541213495,
            "id":"10",
            "index":1,
            "parentId":"1",
            "label":"pack bookmarks"
         }
      ];
  
}

function secondTreeData1(){
    return [
        {
            label: 'tree2_Node0 (html enabled: <i>italic</i>)',
            id: 'tree2_node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'tree2_Node0_1',
                    id: 'tree2_node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'tree2_Node0_1_1',
                            id: 'tree2_node0_1_1',
                            attributes: {
                                'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        },
        {
            label: 'tree2_Node1',
            id: 'tree2_node1',
            attributes: {
                'class': ['class_node1_a', 'class_node1_b'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'tree2_Node1_1',
                    id: 'tree2_node1_1',
                    attributes: {
                        'class': ['class_node1_1_a', 'class_node1_1_b', 'red_node'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'tree2_Node1_1_1',
                            id: 'tree2_node1_1_1',
                            attributes: {
                                'class': ['class_node1_1_1_a', 'class_node1_1_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'tree2_Node1_1_2',
                            id: 'tree2_node1_1_2',
                            attributes: {
                                'class': ['class_node1_1_2_a', 'class_node1_1_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'tree2_Node1_2',
                    id: 'tree2_node1_2',
                    attributes: {
                        'class': ['class_node1_2_a', 'class_node1_2_b', 'ni_tree_init_checked'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'tree2_Node1_2_1',
                            id: 'tree2_node1_2_1',
                            attributes: {
                                'class': ['class_node1_2_1_a', 'class_node1_2_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'tree2_Node1_2_2',
                            id: 'tree2_node1_2_2',
                            attributes: {
                                'class': ['class_node1_2_2_a', 'class_node1_2_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        }
    ];
}

function subTreeData(){
    return [
        {
            label: 'sub_tree_Node0 (html enabled: <i>italic</i>)',
            id: 'sub_tree_node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'sub_tree_Node0_1',
                    id: 'sub_tree_node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'sub_tree_Node0_1_1',
                            id: 'sub_tree_node0_1_1',
                            attributes: {
                                'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        },
        {
            label: 'sub_tree_Node1',
            id: 'sub_tree_node1',
            attributes: {
                'class': ['class_node1_a', 'class_node1_b'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'sub_tree_Node1_1',
                    id: 'sub_tree_node1_1',
                    attributes: {
                        'class': ['class_node1_1_a', 'class_node1_1_b', 'red_node'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'sub_tree_Node1_1_1',
                            id: 'sub_tree_node1_1_1',
                            attributes: {
                                'class': ['class_node1_1_1_a', 'class_node1_1_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'sub_tree_Node1_1_2',
                            id: 'sub_tree_node1_1_2',
                            attributes: {
                                'class': ['class_node1_1_2_a', 'class_node1_1_2_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'sub_tree_Node1_2',
                    id: 'sub_tree_node1_2',
                    attributes: {
                        'class': ['class_node1_2_a', 'class_node1_2_b', 'ni_tree_init_checked'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'sub_tree_Node1_2_1',
                            id: 'sub_tree_node1_2_1',
                            attributes: {
                                'class': ['class_node1_2_1_a', 'class_node1_2_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'sub_tree_Node1_2_2',
                            id: 'sub_tree_node1_2_2',
                            attributes: {
                                'class': ['class_node1_2_2_a', 'class_node1_2_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        }
    ];
}
