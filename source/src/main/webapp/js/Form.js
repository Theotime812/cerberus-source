//var prop_line = 1000;

function selectAll(selectBox, selectAll) {
    // have we been passed an ID
    if (typeof selectBox == "string") {
        selectBox = document.getElementsByName("Country");
    }

    // is the select box a multiple select box?
    if (selectBox.type == "select-multiple") {
        for (var i = 0; i < selectBox.options.length; i++) {
            selectBox.options[i].selected = selectAll;
        }
    } else {
        for (var i = 0; i < selectBox.length; i++) {
            selectBox[i].checked = selectAll;
        }
    }
}
function loadReporting(reportingFavorite) {
    document.location = reportingFavorite;
}


function popup(mylink) {
    window.open(mylink, 'popup',
            'width=500,height=400,scrollbars=yes,menubar=false,location=false');
}
function popupNT(mylink) {
    window.open(mylink, 'popup',
            'width=1200,height=600,scrollbars=yes,menubar=false,location=false');
}
function popupGraph(mylink) {
    window.open(mylink, 'popup',
            'width=500,height=270,scrollbars=yes,menubar=false,location=false');
}
function popupHisto(mylink) {
    window.open(mylink, 'popup',
            'width=1000,height=400,scrollbars=yes,menubar=false,location=false');
}
function importer(mylink) {
    window.open(mylink, 'popup',
            'width=800,height=400,scrollbars=yes,menubar=false,location=1');
}

function enableField(element) {
    document.getElementById(element).disabled = false;
}

function disableField(element) {
    document.getElementById(element).disabled = true;
}

function startUatCheck(arg) {
    /*
     * If not (Production or PreProd) URL, set html background color different
     */
    var prod_url = "/Cerberus/";
    var preprod_url = "/Cerberus-PreProd/";
    if ((location.toString().indexOf(prod_url, 0) == -1) && (location.toString().indexOf(preprod_url, 0) == -1)) {
        document.body.style.background = "#FFFFCC";
    }
}

function EnvTuning(arg) {
    /*
     * If not Production URL, set html background color different
     */
    if ((arg.toString().indexOf("PROD", 0) == -1) &&
            (arg.toString().indexOf("PREPROD", 0) == -1) &&
            (arg.toString().indexOf("prd", 0) == -1)) {
        document.body.style.background = "#FFFFCC";
    }
}


function menuColoring(arg) {
    /*
     * Put actual page button more visible
     */
    var menuCollection = document.getElementsByName('menu');

    var unicityMenu = 0;
    for (var cpt_menu = menuCollection.length - 1; cpt_menu >= 0; cpt_menu--) {

        if (location.toString().indexOf(menuCollection[cpt_menu]) != -1) {
            if (unicityMenu == 0) {
                //menuCollection[cpt_menu].style.background = "#00FF00";
                menuCollection[cpt_menu].style.color = "#00FF00";
                //menuCollection[cpt_menu].parentNode.parentNode.parentNode.firstChild.style.background = "#00FF00";
                menuCollection[cpt_menu].parentNode.parentNode.parentNode.firstChild.style.color = "#00FF00";
                unicityMenu = 1;
            }

        }

    }
    // to manage the coloring of the homepage when entering to the application
    if (location.toString().indexOf("jsp") == -1) {
        document.getElementById("Homepage").style.background = "#00FF00";
    }
}

function subSelect(elemName, inId) {
    var nameElms = [];
    var topItem = document.getElementById(inId);
    var childElms = document.getElementsByName(elemName);
    for (var i = 0; i < childElms.length; i++) {
        if (childElms[i].parentNode == topItem) {
            nameElms[nameElms.length] = childElms[i];
        }
    }
    return nameElms;
}
/*
 * Gestion des clefs, Mandatory, KEY
 */
function keyOnFocus(arg) {
    if (arg.value == 'Mandatory, KEY') {
        arg.value = '';
        arg.style.color = '#000000';
        arg.style.fontStyle = 'normal';
    }
}

function keyOnBlur(arg) {
    if (arg.value == '') {
        arg.value = 'Mandatory, KEY';
        arg.style.color = '#FF0000';
        arg.style.fontStyle = 'italic';
    }
}

function resetReportFilter() {
    document.getElementById('build').value = 'All';
    document.getElementById('revision').value = 'All';
    document.getElementById('env').value = 'All';
    document.getElementById('app').value = 'All';
    document.getElementById('ip').value = 'All';

    document.getElementById('ReportFilters').submit();
}

/*
 * Functions used for dynamic tables
 */
function addTestCaseRow(tableau, max_tc_desc, max_tc_behavior, max_tc_status,
        max_tc_group) {
    TR = document.createElement('tr');

    /* Delete */
    var form0 = document.createElement('input');
    form0.setAttribute('name', 'testcase_delete');
    form0.setAttribute('id', 'testcase_delete');
    form0.setAttribute('type', 'checkbox');
    var TD0 = document.createElement('td');
    TD0.appendChild(form0);
    TR.appendChild(TD0);

    /* Test Case */
    var form = document.createElement('input'); /* Create form */
    form.setAttribute('name', 'testcase_testcase');
    form.setAttribute('id', 'testcase_testcase');
    form
            .setAttribute('style',
                    'font-weight: bold;width: 50px;font-style: italic; color: #FF0000;');
    form.setAttribute('onfocus', 'keyOnFocus(this)');
    form.setAttribute('onblur', 'keyOnBlur(this)');
    form.setAttribute('value', 'Mandatory, KEY');
    var TD = document.createElement('td'); /* Create column */
    TD.appendChild(form); /* Add form to column */
    TR.appendChild(TD); /* Add column to row */

    /* Application */
    var form8 = document.createElement('select');
    if (document.getElementById("testcase_application_")) {
        form8.setAttribute('name', 'testcase_application');
        form8.setAttribute('id', 'testcase_application');
        form8
                .setAttribute('style',
                        'font-weight: bold;width: 80px;font-style: italic; color: #FF0000;');
        form8.innerHTML = (form8.innerHTML + document
                .getElementById('testcase_application_').innerHTML);
    }
    var TD8 = document.createElement('td');
    TD8.appendChild(form8);
    TR.appendChild(TD8);

    /* Project */
    var form9 = document.createElement('input');
    form9.setAttribute('name', 'testcase_project');
    form9.setAttribute('id', 'testcase_project');
    form9
            .setAttribute('style',
                    'font-weight: bold;width: 25px;font-style: italic; color: #FF0000;');
    var TD9 = document.createElement('td');
    TD9.appendChild(form9);
    TR.appendChild(TD9);

    /* Description */
    var form1 = document.createElement('textarea');
    form1.setAttribute('name', 'testcase_description');
    form1.setAttribute('id', 'testcase_description');
    form1.setAttribute('style', 'width: 165px');
    form1.setAttribute('maxlength', max_tc_desc);
    var TD1 = document.createElement('td');
    TD1.appendChild(form1);
    TR.appendChild(TD1);

    /* Value expected */
    var form2 = document.createElement('textarea');
    form2.setAttribute('name', 'testcase_valueexpec');
    form2.setAttribute('id', 'testcase_valueexpec');
    form2.setAttribute('style', 'width: 425px');
    form2.setAttribute('maxlength', max_tc_behavior);
    var TD2 = document.createElement('td');
    TD2.appendChild(form2);
    TR.appendChild(TD2);

    /* Read Only */
    var form3 = document.createElement('select');
    if (document.getElementById("testcase_readonly_")) {
        form3.setAttribute('name', 'testcase_readonly');
        form3.setAttribute('id', 'testcase_readonly');
        form3.setAttribute('style', 'width: 40px');
        form3.innerHTML = (form3.innerHTML + document
                .getElementById('testcase_readonly_').innerHTML);
    }
    var TD3 = document.createElement('td');
    TD3.appendChild(form3);
    TR.appendChild(TD3);

    /* Countries */
    var form5 = document.createElement('input');
    form5.setAttribute('name', 'testcase_countries');
    form5.setAttribute('id', 'testcase_countries');
    form5.setAttribute('style', 'width: 130px');
    var form5b = document.createElement('input');
    form5b.setAttribute('name', 'testcase_countries_hidden');
    form5b.setAttribute('id', 'testcase_countries_hidden');
    form5b.setAttribute('type', 'hidden');
    var TD5 = document.createElement('td');
    TD5.appendChild(form5);
    TD5.appendChild(form5b);
    TR.appendChild(TD5);

    /* Priority */
    var form6 = document.createElement('select');
    if (document.getElementById("testcase_priority_")) {
        form6.setAttribute('name', 'testcase_priority');
        form6.setAttribute('id', 'testcase_priority');
        form6.setAttribute('style', 'width: 40px');
        form6.innerHTML = (form6.innerHTML + document
                .getElementById('testcase_priority_').innerHTML);
    }
    var TD6 = document.createElement('td');
    TD6.appendChild(form6);
    TR.appendChild(TD6);

    /* Status */
    var form7 = document.createElement('select');
    if (document.getElementById("testcase_status_")) {
        form7.setAttribute('name', 'testcase_status');
        form7.setAttribute('id', 'testcase_status');
        form7.setAttribute('style', 'width: 70px');
        form7.innerHTML = (form7.innerHTML + document
                .getElementById('testcase_status_').innerHTML);
        form7.setAttribute('maxlength', max_tc_status);
    }
    var TD7 = document.createElement('td');
    TD7.appendChild(form7);
    TR.appendChild(TD7);

    /* Group */
    var form19 = document.createElement('select');
    if (document.getElementById("testcase_group_")) {
        form19.setAttribute('name', 'testcase_group');
        form19.setAttribute('id', 'testcase_group');
        form19.setAttribute('style', 'width: 50px');
        form19.setAttribute('maxlength', max_tc_group);
        form19.innerHTML = (form19.innerHTML + document
                .getElementById('testcase_group_').innerHTML);
    }
    var TD19 = document.createElement('td');
    TD19.appendChild(form19);
    TR.appendChild(TD19);

    /* tcActive */
    var form10 = document.createElement('select');
    if (document.getElementById("testcase_tcActive_")) {
        form10.setAttribute('name', 'testcase_tcActive');
        form10.setAttribute('id', 'testcase_tcActive');
        form10.setAttribute('style', 'width: 30px');
        form10.setAttribute('maxlength', max_tc_group);
        form10.innerHTML = (form10.innerHTML + document
                .getElementById('testcase_tcActive_').innerHTML);
    }
    var TD10 = document.createElement('td');
    TD10.appendChild(form10);
    TR.appendChild(TD10);

    document.getElementById(tableau).appendChild(TR);
}

function EnableAddTestButton(id1, id2, newValue, initValue) {
    if (newValue != initValue) {
        document.getElementById(id1).disabled = false;
        document.getElementById(id2).disabled = true;
    } else {
        document.getElementById(id1).disabled = true;
        document.getElementById(id2).disabled = false;
    }
}

function redirectionTestCase(target, test) { // Redirection testcase, un form
    // et deux submits, si save
    // changes 0, si add test 1
    if (target == 0) {
        document.DeleteTest.action = "UpdateTest";
        document.DeleteTest.submit();
    }
//	if (target == 1) {
//		document.updateTest.action = "AddTest";
//	}
    if (target == 2) {
        var oRows = document.getElementById('testcasetable')
                .getElementsByTagName('tr');
        var iRowCount = oRows.length;

        if (iRowCount == 1) {
            if (confirm('Do you really want to delete this Test ?')) {
                document.DeleteTest.action = "DeleteTest";
                document.DeleteTest.submit();
            }
        } else {
            alert('You have to delete all TestCases before delete the Test');
        }
    }
}

function addTestCaseProperties(tableau, max_tcp_country,
        max_tcp_property, max_tcp_value, max_tcp_length, max_tcp_rowlimit,
        row_number, size, size2) {

    TR = document.createElement('tr');

    /* Delete box */
    // prop_line++;
    var form1 = document.createElement('input');
    form1.setAttribute('type', 'checkbox');
    form1.setAttribute('name', 'properties_delete');
    form1.setAttribute('style', '');
    form1.setAttribute('value', row_number + 1);
    var form11 = document.createElement('input');
    form11.setAttribute('name', 'property_hidden');
    form11.setAttribute('type', 'hidden');
    form11.setAttribute('value', row_number + 1);
    var TD1 = document.createElement('td');
    TD1.setAttribute('style', 'background-color:white; text-align: center');
    TD1.appendChild(form1);
    TD1.appendChild(form11);
    TR.appendChild(TD1);

    /* Property */
    var form2 = document.createElement('input');
    form2.setAttribute('name', 'properties_property');
    form2.setAttribute('class', 'wob properties_id_'+ eval(row_number + 1));
    form2.setAttribute('size', '130%');
    form2
            .setAttribute('style',
                    'width: 130px; font-weight: bold;font-style: italic; color: #FF0000;');
    form2.setAttribute('placeholder', 'Feed Property Name');
    form2.setAttribute('maxlength', max_tcp_property);
    var TD2 = document.createElement('td');
    TD2.setAttribute('style', 'background-color:white');
    TD2.appendChild(form2);
    TR.appendChild(TD2);

    /*
     * Country
     */
    /* Parse values from hidden containing all countries */

    var TD3 = document.createElement('td'); /* Create column */
    if (document.getElementById("toto")) {
        TD3.setAttribute('style', 'font-size : x-small ; width: ' + size
                + 'px;');
        TD3.setAttribute('style', 'background-color: white;');
        
        var jToto = $('#toto');
        jToto.find('input[name="properties_country"]').addClass('properties_id_'+ eval(row_number + 1));
        TD3.innerHTML = (TD3.innerHTML + jToto.html());
        
        // if (document.getElementById("checkbox-AT")) {
        // tata=TD3.getElementById("checkbox-AT")
        // tata.setAttribute('value', prop_line+' - AT');
        // tata.setAttribute('name', property_country);
        // }

    }
    TR.appendChild(TD3);

    /* Type */
    var form4 = document.createElement('select');
    if (document.getElementById("new_properties_type_new_properties_value")) {
        form4.setAttribute('name', 'properties_type');
        form4.setAttribute('id', 'typenew_properties_value');
        form4.setAttribute('style', 'width: 120px');
        form4.setAttribute('onchange', 'activateDatabaseBox(this.value, \'properties_dtb_typeID\' , \'properties_dtb_type_ID\'); activateValue2(this.value, \'tdValue2_new\', \'new_properties_value\',\'new_properties_value2\',\'' + size2 + '\')');
        form4.setAttribute('class', 'wob');
        form4.innerHTML = (form4.innerHTML + document
                .getElementById('new_properties_type_new_properties_value').innerHTML);
//        var form44 = document.createElement('option');
//        form44.setAttribute('Value', 'executeSql');
//        form44.setAttribute('selected', 'selected');
//        form4.appendChild(form44);
    }
    var TD4 = document.createElement('td');
    TD4.setAttribute('style', 'background-color:white');
    TD4.appendChild(form4);
    TR.appendChild(TD4);

    /* Database */
    var form41 = document.createElement('select');
    if (document.getElementById("properties_dtb_")) {
        form41.setAttribute('name', 'properties_dtb');
        form41.setAttribute('style', 'width: 40px');
        form41.setAttribute('style', 'display: inline');
        form41.setAttribute('class', 'wob');
        form41.innerHTML = (form41.innerHTML + document
                .getElementById('properties_dtb_').innerHTML);
        form41.setAttribute('id', 'properties_dtb_typeID');
    }

    var form42 = document.createElement('input');
    form42.setAttribute('style', 'display:none; width: 39px; background-color: white; text-align: center;');
    form42.setAttribute('id', 'properties_dtb_type_ID');
    form42.setAttribute('class', 'wob');
    form42.setAttribute('value', '---');
    var TD41 = document.createElement('td');
    TD41.setAttribute('style', 'background-color:white');
    TD41.appendChild(form41);
    TD41.appendChild(form42);
    TR.appendChild(TD41);

    /* Value */
    var form5 = document.createElement('textarea');
    form5.setAttribute('name', 'properties_value');
    form5.setAttribute('class', 'wob');
    form5.setAttribute('id', 'new_properties_value');
    form5.setAttribute('style', 'width: ' + size2 + 'px');
    form5.setAttribute('maxlength', max_tcp_value);
    var TD5 = document.createElement('td');
    var TB51 = document.createElement('table');
    var TR51 = document.createElement('tr');
    var TD51 = document.createElement('td');
    TD51.setAttribute('style', 'background-color:white');
    TD51.appendChild(form5);
    TD51.setAttribute('class', 'wob');
    TR51.appendChild(TD51);

    var form54 = document.createElement('textarea');
    form54.setAttribute('name', 'properties_value2');
    form54.setAttribute('placeholder', 'Attribute');
    form54.setAttribute('class', 'wob');
    form54.setAttribute('id', 'new_properties_value2');
    form54.setAttribute('maxlength', max_tcp_value);
    var TD52 = document.createElement('td');
    TD52.setAttribute('style', 'background-color:white; display:none');
    TD52.setAttribute('id', 'tdValue2_new');
    TD52.appendChild(form54);
    TD52.setAttribute('class', 'wob');
    TR51.appendChild(TD52);

    var form52 = document.createElement('input');
    form52.setAttribute('style', 'display:inline; height:20px; width:20px; background-color: white; color:blue; font-weight:bolder');
    form52.setAttribute('title', 'Open SQL Library');
    form52.setAttribute('class', 'smallbutton');
    form52.setAttribute('type', 'button');
    form52.setAttribute('value', 'L');
    form52.setAttribute('onclick', 'openSqlLibraryPopin(\'new_properties_value\')');

    var TD52 = document.createElement('td');
    TD52.setAttribute('style', 'background-color:white');
    TD52.setAttribute('class', 'wob');
    TD52.appendChild(form52);
    TR51.appendChild(TD52);

    TB51.appendChild(TR51);
    TD5.appendChild(TB51);
    TD5.setAttribute('style', 'background-color: white');
    TR.appendChild(TD5);



    /* Length */
    var form6 = document.createElement('input');
    form6.setAttribute('name', 'properties_length');
    form6.setAttribute('value', 0);
    form6.setAttribute('class', 'wob');
    form6.setAttribute('style', 'width: 40px');
    form6.setAttribute('maxlength', max_tcp_length);
    var TD6 = document.createElement('td');
    TD6.setAttribute('style', 'background-color:white');
    TD6.appendChild(form6);
    TR.appendChild(TD6);

    /* Row Limit */
    var form7 = document.createElement('input');
    form7.setAttribute('name', 'properties_rowlimit');
    form7.setAttribute('value', 0);
    form7.setAttribute('style', 'width: 40px');
    form7.setAttribute('class', 'wob');
    form7.setAttribute('maxlength', max_tcp_rowlimit);
    var TD7 = document.createElement('td');
    TD7.setAttribute('style', 'background-color:white');
    TD7.appendChild(form7);
    TR.appendChild(TD7);

    /* Nature */
    var form8 = document.createElement('select');
    if (document.getElementById("properties_nature_")) {
        form8.setAttribute('name', 'properties_nature');
        form8.setAttribute('class', 'wob');
        form8.setAttribute('style', 'width: 80px');
        form8.innerHTML = (form8.innerHTML + document
                .getElementById('properties_nature_').innerHTML);
    }
    var TD8 = document.createElement('td');
    TD8.setAttribute('style', 'background-color:white');
    TD8.appendChild(form8);
    TR.appendChild(TD8);

    document.getElementById(tableau).appendChild(TR);

}

function addTestCaseAction(table, id, max_tcsa_seq, max_tcsa_action, max_tcsa_obj,
        max_tcsa_pro, max_tcsa_desc) {

    TR = document.createElement('tr');

    /* Delete box */
    var form1 = document.createElement('input'); /* Create form */
    form1.setAttribute('type', 'checkbox');
    form1.setAttribute('style', 'height : 20px');
    form1.setAttribute('class', 'wob');
    form1.setAttribute('name', 'actions_delete');
    var TD1 = document.createElement('td'); /* Create column */
    TD1.setAttribute('style', 'text-align:center');
    TD1.setAttribute('style', 'background-color:white; text-align: center');
    TD1.appendChild(form1); /* Add form to column */

    var form = document.createElement('input');
    form.setAttribute('type', 'hidden');
    form.setAttribute('name', 'stepnumber_hidden');
    form.setAttribute('value', id);

    TD1.appendChild(form);
    TR.appendChild(TD1);

    /* Sequence */

    var value = getMaxValueForParentElementIdAndElementName(table, 'actions_sequence');

    if (value && parseInt(value) > 0) {
        value = parseInt(value) + 10;
    } else {
        value = 10;
    }

    var form2 = document.createElement('input');
    form2.setAttribute('name', 'actions_sequence');
    form2.setAttribute('size', '6%');
    form2
            .setAttribute('style',
                    'width: 60px ;font-weight: bold;font-style: italic; color: #FF0000;');
    form2.setAttribute('onfocus', 'keyOnFocus(this)');
    form2.setAttribute('class', 'wob');
    form2.setAttribute('onblur', 'keyOnBlur(this)');
    form2.setAttribute('value', value);
    form2.setAttribute('maxlength', max_tcsa_seq);
    var TD2 = document.createElement('td');
    TD2.setAttribute('style', 'background-color:white; text-align: center');
    TD2.appendChild(form2);
    TR.appendChild(TD2);

    /* Action */
    var form3 = document.createElement('select');
    if (document.getElementById("actions_action_")) {
        form3.setAttribute('name', 'actions_action');
        form3.setAttribute('style', 'width: 100%');
        form3.setAttribute('class', 'wob');
        form3.innerHTML = (form3.innerHTML + document
                .getElementById('actions_action_').innerHTML);
    }
    var TD3 = document.createElement('td');
    TD3.setAttribute('style', 'background-color:white; text-align: center');
    TD3.appendChild(form3);
    TR.appendChild(TD3);

    /* Object */
    var form4 = document.createElement('input');
    form4.setAttribute('name', 'actions_object');
    form4.setAttribute('size', '100%');
    form4.setAttribute('class', 'wob');
    form4.setAttribute('style', 'width: 350px');
    form4.setAttribute('maxlength', max_tcsa_obj);
    var TD4 = document.createElement('td');
    TD4.setAttribute('style', 'background-color:white; text-align: center');
    if (displayOnlyFunctional) {
        TD4.setAttribute('class', 'technical_part only_functional');
    } else {
        TD4.setAttribute('class', 'technical_part');
    }
    TD4.appendChild(form4);
    TR.appendChild(TD4);

    /* Property */
    var form5 = document.createElement('input');
    form5.setAttribute('name', 'actions_property');
    form5.setAttribute('size', '100%');
    form5.setAttribute('class', 'wob');
    form5.setAttribute('style', 'width: 210px');
    form5.setAttribute('maxlength', max_tcsa_pro);
    var TD5 = document.createElement('td');
    TD5.setAttribute('style', 'background-color:white; text-align: center');
    if (displayOnlyFunctional) {
        TD5.setAttribute('class', 'technical_part only_functional');
    } else {
        TD5.setAttribute('class', 'technical_part');
    }
    TD5.appendChild(form5);
    TR.appendChild(TD5);

    /* Description */
    var form6 = document.createElement('input');
    form6.setAttribute('name', 'actions_description');
    form6.setAttribute('size', '100%');
    if (displayOnlyFunctional) {
        form6.setAttribute('class', 'wob functional_description only_functional_description_size');
    } else {
        form6.setAttribute('class', 'wob functional_description');
    }
    form6.setAttribute('style', 'width: 100%');
    form6.setAttribute('maxlength', max_tcsa_desc);
    var TD6 = document.createElement('td');
    TD6.setAttribute('style', 'background-color:white;');
    if (displayOnlyFunctional) {
        TD6.setAttribute('class', 'functional_description only_functional_description_size');
    } else {
        TD6.setAttribute('class', 'functional_description');
    }
    TD6.appendChild(form6);
    TR.appendChild(TD6);

    document.getElementById(table).appendChild(TR);
}

var numberOfCall = 0;
function addStep(div, max_tcs_desc) {

    var table = document.createElement('div');
    table.setAttribute('id', 'table');

    TR = document.createElement('tr');
    table.appendChild(TR);

    TR.appendChild(document.createTextNode("  Step ID  :"));
    var input1 = document.createElement('input');
    input1.setAttribute('style',
            'font-weight: bold;font-style: italic; width:20px');
    input1.setAttribute('name', 'step_number_add');
    input1.setAttribute('class', 'wob');
    input1.setAttribute('title', 'Step ID');
    input1.setAttribute('maxlength', 10);
    input1.setAttribute('onfocus', 'keyOnFocus(this)');
    input1.setAttribute('onblur', 'keyOnBlur(this)');

    var value = getMaxValueForParentElementIdAndElementName(null, 'testcasestep_hidden');
    if (value && parseInt(value) > 0) {
        value = parseInt(value) + 10;
    } else {
        value = 10;
    }

    input1.setAttribute('value', value);
    var TD1 = document.createElement('td'); /* Create column */
    TD1.setAttribute('style', 'background-color:#e1e7f3; text-align: center; valign:center');
    TD1.setAttribute('class', 'wob');
    TD1.appendChild(input1); /* Add form to column */
    TR.appendChild(TD1);

    TR.appendChild(document.createTextNode("  Step Description  :"));
    var input2 = document.createElement('input');
    input2.setAttribute('size', '100%');
    input2.setAttribute('class', 'wob');
    input2.setAttribute('style', 'width : 500px');
    input2.setAttribute('name', 'step_description_add');
    input2.setAttribute('maxlength', max_tcs_desc);
    var TD2 = document.createElement('td'); /* Create column */
    TD2.setAttribute('style', 'background-color:#e1e7f3; text-align: center');
    TD2.setAttribute('class', 'wob');
    TD2.appendChild(input2); /* Add form to column */
    TR.appendChild(TD2);

    var TD7 = document.createElement('td');
    TD7.setAttribute('class', 'wob');
    TR.appendChild(TD7);

    TR2 = document.createElement('tr');

    var TD13 = document.createElement('td');
    TD13.setAttribute('style', 'width:10px');
    TD13.setAttribute('class', 'wob');
    TR2.appendChild(TD13);

    var input4 = document.createElement('input');
    input4.setAttribute('type', 'submit');
    input4.setAttribute('value', 'Save Changes');

    table.appendChild(input4);


    table.appendChild(document.createElement('br'));
    table.appendChild(document.createElement('br'));

    document.getElementById(div).appendChild(table);

    numberOfCall++;
}

function addTestCaseControl(table, step_id, max_tcc_step, max_tcc_sequence,
        max_tcc_control, max_tcc_type, max_tcc_value, max_tcc_property,
        max_tcc_description, tab_type) {
    TR = document.createElement('tr');

    /* Delete box */
    var form1 = document.createElement('input'); /* Create form */
    form1.setAttribute('type', 'checkbox');
    form1.setAttribute('style', 'width:30px');
    form1.setAttribute('class', 'wob');
    form1.setAttribute('name', 'controls_delete');


    /* Step */
    var form2 = document.createElement('input');
    form2.setAttribute('name', 'controls_step');
    form2.setAttribute('type', 'hidden');
    form2.setAttribute('value', step_id);

    var TD1 = document.createElement('td'); /* Create column */
    TD1.setAttribute('style', 'background-color:white; text-align: center');
    TD1.appendChild(form1); /* Add form to column */
    TD1.appendChild(form2); /* Add form to column */
    TR.appendChild(TD1);

    /* Sequence */
    var value_actions = getMaxValueForParentElementIdAndElementName('Action' + step_id, 'actions_sequence');
    var form3 = document.createElement('input');
    form3.setAttribute('name', 'controls_sequence');
    form3
            .setAttribute('style',
                    'width: 60px; font-weight: bold;font-style: italic; color: #FF0000;');
    form3.setAttribute('maxlength', max_tcc_sequence);
    form3.setAttribute('onfocus', 'keyOnFocus(this)');
    form3.setAttribute('onblur', 'keyOnBlur(this)');
    form3.setAttribute('class', 'wob');
    form3.setAttribute('value', value_actions);
    var TD3 = document.createElement('td');
    TD3.setAttribute('style', 'background-color:white');
    TD3.appendChild(form3);
    TR.appendChild(TD3);

    /* Control */
    var value_control = getMaxValueForParentElementIdAndElementName('control_table' + step_id, 'controls_control');
    if (value_control && parseInt(value_control) > 0) {
        value_control = parseInt(value_control) + 10;
    } else {
        value_control = 10;
    }


    var form4 = document.createElement('input');
    form4.setAttribute('name', 'controls_control');
    form4
            .setAttribute('style',
                    'width: 60px; font-weight: bold;font-style: italic; color: #FF0000;');
    form4.setAttribute('maxlength', max_tcc_control);
    form4.setAttribute('onfocus', 'keyOnFocus(this)');
    form4.setAttribute('class', 'wob');
    form4.setAttribute('onblur', 'keyOnBlur(this)');
    form4.setAttribute('value', value_control);
    var TD4 = document.createElement('td');
    TD4.setAttribute('style', 'background-color:white');
    TD4.appendChild(form4);
    TR.appendChild(TD4);

    /* Type */
    var form5 = document.createElement('select');
    if (document.getElementById("controls_type_")) {
        form5.setAttribute('name', 'controls_type');
        form5.setAttribute('class', 'wob');
        form5.setAttribute('style', 'width: 100%');
        form5.innerHTML = (form5.innerHTML + document
                .getElementById('controls_type_').innerHTML);
    }
    var TD5 = document.createElement('td');
    TD5.setAttribute('style', 'background-color:white');
    TD5.appendChild(form5);
    TR.appendChild(TD5);

    /* Property */
    var form7 = document.createElement('input');
    form7.setAttribute('name', 'controls_controlproperty');
    form7.setAttribute('style', 'width: 260px');
    form7.setAttribute('class', 'wob');
    form7.setAttribute('maxlength', max_tcc_property);
    var TD7 = document.createElement('td');
    TD7.setAttribute('style', 'background-color:white');
    if (displayOnlyFunctional) {
        TD7.setAttribute('class', 'technical_part only_functional');
    } else {
        TD7.setAttribute('class', 'technical_part');
    }
    TD7.appendChild(form7);
    TR.appendChild(TD7);

    /* Value */
    var form6 = document.createElement('input');
    form6.setAttribute('name', 'controls_controlvalue');
    form6.setAttribute('class', 'wob');
    form6.setAttribute('style', 'width: 180px');
    form6.setAttribute('maxlength', max_tcc_value);
    var TD6 = document.createElement('td');
    TD6.setAttribute('style', 'background-color:white');
    if (displayOnlyFunctional) {
        TD6.setAttribute('class', 'technical_part only_functional');
    } else {
        TD6.setAttribute('class', 'technical_part');
    }
    TD6.appendChild(form6);
    TR.appendChild(TD6);

    /* Fatal */
    var form7 = document.createElement('select');
    if (document.getElementById("controls_fatal_")) {
        form7.setAttribute('name', 'controls_fatal');
        form7.setAttribute('class', 'wob');
        form7.setAttribute('style', 'width: 40px');
        form7.innerHTML = (form7.innerHTML + document
                .getElementById('controls_fatal_').innerHTML);
    }
    var TD7 = document.createElement('td');
    TD7.setAttribute('style', 'background-color:white');
    if (displayOnlyFunctional) {
        TD7.setAttribute('class', 'technical_part only_functional');
    } else {
        TD7.setAttribute('class', 'technical_part');
    }

    TD7.appendChild(form7);
    TR.appendChild(TD7);

    /* Description */
    var form8 = document.createElement('input');
    form8.setAttribute('name', 'controls_controldescription');
    if (displayOnlyFunctional) {
        form8.setAttribute('class', 'wob functional_description_control only_functional_description_control_size');
    } else {
        form8.setAttribute('class', 'wob functional_description_control');
    }
    form8.setAttribute('style', 'width: 100%');
    form8.setAttribute('maxlength', max_tcc_description);
    var TD8 = document.createElement('td');
    TD8.setAttribute('style', 'background-color:white');
    if (displayOnlyFunctional) {
        TD8.setAttribute('class', 'functional_description_control only_functional_description_control_size');
    } else {
        TD8.setAttribute('class', 'functional_description_control');
    }
    TD8.appendChild(form8);
    TR.appendChild(TD8);

    document.getElementById(table).appendChild(TR);
}

function switchDivVisibleInvisible(visible, invisible) {
    document.getElementById(visible).style.display = "inline-block";
    document.getElementById(invisible).style.display = "none";
}
function switchTableVisibleInvisible(visible, invisible) {
    document.getElementById(visible).style.display = "inline";
    document.getElementById(invisible).style.display = "none";
}
function enableElement(element) {
    document.getElementById(element).disabled = false;
}
function setVisible() {
    document.getElementById('generalparameter').style.display = "table";
    document.getElementById('parametergeneral').style.display = "none";

}
function setInvisible() {
    document.getElementById('generalparameter').style.display = "none";
    document.getElementById('parametergeneral').style.display = "table";
}

function setVisibleP() {
    document.getElementById('propertytable').style.display = "table";
    document.getElementById('tableproperty').style.display = "none";
}
function setInvisibleP() {
    document.getElementById('propertytable').style.display = "none";
    document.getElementById('tableproperty').style.display = "table";
}
function setVisibleRep() {
    document.getElementById('reportingExec').style.display = "table";
    document.getElementById('statusReporting').style.display = "none";
    document.getElementById('groupReporting').style.display = "none";
    document.getElementById('execReporting').style.display = "none";
    document.getElementById('ShowS').style.display = "table";
    document.getElementById('ShowD').style.display = "none";
}
function setInvisibleRep() {
    document.getElementById('reportingExec').style.display = "none";
    document.getElementById('statusReporting').style.display = "table";
    document.getElementById('groupReporting').style.display = "table";
    document.getElementById('execReporting').style.display = "table";
    document.getElementById('ShowS').style.display = "none";
    document.getElementById('ShowD').style.display = "table";
}

function setNewtestVisible() {
    document.getElementById('reportingExec').style.display = "none";
    document.getElementById('reportingExec').style.display = "none";
}

function setTestVisible() {
    document.getElementById('filters').style.display = "table";
    document.getElementById('generalparameters').style.display = "table";
}

function setVisibleContent1() {
    document.getElementById('buildContent1').style.display = "table";
    document.getElementById('button11').style.display = "inline";
    document.getElementById('button21').style.display = "none";

}

function setVisibleContent2() {
    document.getElementById('buildContent2').style.display = "table";
    document.getElementById('button12').style.display = "inline";
    document.getElementById('button22').style.display = "none";
}

function setVisibleContent3() {
    document.getElementById('buildContent3').style.display = "table";
    document.getElementById('button13').style.display = "inline";
    document.getElementById('button23').style.display = "none";
}

function setVisibleContent4() {
    document.getElementById('buildContent4').style.display = "table";
    document.getElementById('button14').style.display = "inline";
    document.getElementById('button24').style.display = "none";
}

function setVisibleContent5() {
    document.getElementById('buildContent5').style.display = "table";
    document.getElementById('button15').style.display = "inline";
    document.getElementById('button25').style.display = "none";
}
function setVisibleContent6() {
    document.getElementById('buildContent6').style.display = "table";
    document.getElementById('button16').style.display = "inline";
    document.getElementById('button26').style.display = "none";
}

function setVisibleContent7() {
    document.getElementById('buildContent7').style.display = "table";
    document.getElementById('button17').style.display = "inline";
    document.getElementById('button27').style.display = "none";
}

function setVisibleContent8() {
    document.getElementById('buildContent8').style.display = "table";
    document.getElementById('button18').style.display = "inline";
    document.getElementById('button28').style.display = "none";
}

function setVisibleContent9() {
    document.getElementById('buildContent9').style.display = "table";
    document.getElementById('button19').style.display = "inline";
    document.getElementById('button29').style.display = "none";
}
function setVisibleContent10() {
    document.getElementById('buildContent10').style.display = "table";
    document.getElementById('button110').style.display = "inline";
    document.getElementById('button210').style.display = "none";
}

function setInvisibleContent1() {
    document.getElementById('buildContent1').style.display = "none";
    document.getElementById('button11').style.display = "none";
    document.getElementById('button21').style.display = "inline";

}

function setInvisibleContent2() {
    document.getElementById('buildContent2').style.display = "none";
    document.getElementById('button12').style.display = "none";
    document.getElementById('button22').style.display = "inline";
}

function setInvisibleContent3() {
    document.getElementById('buildContent3').style.display = "none";
    document.getElementById('button13').style.display = "none";
    document.getElementById('button23').style.display = "inline";
}

function setInvisibleContent4() {
    document.getElementById('buildContent4').style.display = "none";
    document.getElementById('button14').style.display = "none";
    document.getElementById('button24').style.display = "inline";
}

function setInvisibleContent5() {
    document.getElementById('buildContent5').style.display = "none";
    document.getElementById('button15').style.display = "none";
    document.getElementById('button25').style.display = "inline";
}
function setInvisibleContent6() {
    document.getElementById('buildContent6').style.display = "none";
    document.getElementById('button16').style.display = "none";
    document.getElementById('button26').style.display = "inline";
}

function setInvisibleContent7() {
    document.getElementById('buildContent7').style.display = "none";
    document.getElementById('button17').style.display = "none";
    document.getElementById('button27').style.display = "inline";
}

function setInvisibleContent8() {
    document.getElementById('buildContent8').style.display = "none";
    document.getElementById('button18').style.display = "none";
    document.getElementById('button28').style.display = "inline";
}

function setInvisibleContent9() {
    document.getElementById('buildContent9').style.display = "none";
    document.getElementById('button19').style.display = "none";
    document.getElementById('button29').style.display = "inline";
}
function setInvisibleContent10() {
    document.getElementById('buildContent10').style.display = "none";
    document.getElementById('button110').style.display = "none";
    document.getElementById('button210').style.display = "inline";
}

function showEntireValue(valueId, nbline, buttonOneId, buttonTwoId) {
    document.getElementById(valueId).rows = nbline;
    document.getElementById(buttonOneId).style.display = "none";
    document.getElementById(buttonTwoId).style.display = "inline";
}

function showLessValue(valueId, buttonOneId, buttonTwoId) {
    document.getElementById(valueId).rows = "2";
    document.getElementById(buttonOneId).style.display = "inline";
    document.getElementById(buttonTwoId).style.display = "none";
}
// Functions for SQL Library

function openSqlLibraryPopup(page, field) {
    window.open(page + field, 'popup',
            'width=800,height=400,scrollbars=yes,menubar=false,location=false');
}

function showSqlDetails(valueId, buttonOneId, buttonTwoId) {
    document.getElementById(valueId).style.display = "inline";
    document.getElementById(buttonOneId).style.display = "none";
    document.getElementById(buttonTwoId).style.display = "inline";
}
function hideSqlDetails(valueId, buttonOneId, buttonTwoId) {
    document.getElementById(valueId).style.display = "none";
    document.getElementById(buttonOneId).style.display = "inline";
    document.getElementById(buttonTwoId).style.display = "none";
}

function activateDatabaseBox(value, fieldOneId, fieldTwoId) {
    if (value === "executeSql" || value === "executeSqlFromLib" || value === "executeSoapFromLib") {
        $("#"+fieldOneId).empty().append($('#'+fieldTwoId).html());
    } else
    {
        $("#"+fieldOneId).empty().append($('<option></option>').text("---").val("---"));
    }
}

function activateValue2(value, fieldOneId, fieldTwoId, fieldThreeId, size2) {
    if (value === "getAttributeFromHtml" || value === "getFromXml" || value === "getFromCookie" || value === "getDifferencesFromXml") {
        var size3 = 1 * size2 / 3;
        var size4 = (2 * size2 / 3) - 5;
        document.getElementById(fieldOneId).style.display = "inline";
        document.getElementById(fieldThreeId).style.width = size3 + "px";
        document.getElementById(fieldTwoId).style.width = size4 + "px";
    } else
    {
        document.getElementById(fieldOneId).style.display = "none";
        document.getElementById(fieldTwoId).style.width = size2 + "px";
    }
}
//End of function for SQL Library
function setGraphInvisible(chart, button, button2) {
    document.getElementById(chart).style.display = "none";
    document.getElementById(button).style.display = "none";
    document.getElementById(button2).style.display = "inline";
}
function setGraphVisible(chart, button, button2) {
    document.getElementById(chart).style.display = "block";
    document.getElementById(button).style.display = "inline";
    document.getElementById(button2).style.display = "none";
}

//Functions for Run Page
function setEnvManual() {
    document.getElementById("myloginrelativeurl").disabled = false;
    document.getElementById("myhost").disabled = false;
    document.getElementById("mycontextroot").disabled = false;
    document.getElementById("myenvdata").disabled = false;
    document.getElementById("environment").disabled = true;
}
function setEnvAutomatic() {
    document.getElementById("myloginrelativeurl").disabled = true;
    document.getElementById("myhost").disabled = true;
    document.getElementById("mycontextroot").disabled = true;
    document.getElementById("myenvdata").disabled = true;
    document.getElementById("environment").disabled = false;
}
function setRobotManual() {
    document.getElementById("robot").disabled = true;
    document.getElementById("ss_ip").disabled = false;
    document.getElementById("ss_p").disabled = false;
    document.getElementById("platform").disabled = false;
    document.getElementById("browser").disabled = false;
    document.getElementById("version").disabled = false;
    document.getElementById("os").disabled = false;
}
function setRobotAutomatic() {
    document.getElementById("robot").disabled = false;
    document.getElementById("ss_ip").disabled = true;
    document.getElementById("ss_p").disabled = true;
    document.getElementById("platform").disabled = true;
    document.getElementById("browser").disabled = true;
    document.getElementById("version").disabled = true;
    document.getElementById("os").disabled = true;
}

/*
 * Functions used for dynamic tables
 */
function addBuildContent(tableau) {
    TR = document.createElement('tr');

    /* Delete */
    var form0 = document.createElement('input');
    form0.setAttribute('name', 'ubcDelete');
    form0.setAttribute('type', 'checkbox');
    form0.setAttribute('style', 'width:10px');
    var TD0 = document.createElement('td');
    TD0.setAttribute('style', 'border-color:gainsboro');
    TD0.setAttribute('border', '1px');
    TD0.appendChild(form0);
    TD0.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD0);


    /* Build */
    var form1 = document.createElement('select');
    if (document.getElementById("buildcontent_build_")) {
        form1.setAttribute('name', 'ubcBuild');
        form1.setAttribute('style', 'width:60px; font-size:x-small');
        form1.setAttribute('class', 'wob');
        form1.innerHTML = (form1.innerHTML + document.getElementById('buildcontent_build_').innerHTML);
    }
    var TD1 = document.createElement('td');
    TD1.appendChild(form1);
    TD1.setAttribute('border-left', '1px');
    TD1.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD1);

    /* Revision */
    var form2 = document.createElement('select');
    if (document.getElementById("buildcontent_revision_")) {
        form2.setAttribute('name', 'ubcRevision');
        form2.setAttribute('style', 'width:40px; font-size:x-small');
        form2.setAttribute('class', 'wob');
        form2.innerHTML = (form2.innerHTML + document.getElementById('buildcontent_revision_').innerHTML);
    }
    var TD2 = document.createElement('td');
    TD2.appendChild(form2);
    TD2.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD2);

    /* Application */
    var form3 = document.createElement('select');
    if (document.getElementById("buildcontent_application_")) {
        form3.setAttribute('name', 'ubcApplication');
        form3.setAttribute('class', 'wob');
        form3.setAttribute('style', 'font-weight: bold;width: 170px;font-style: italic; font-size:x-small');
        form3.innerHTML = (form3.innerHTML + document.getElementById('buildcontent_application_').innerHTML);
    }
    var form31 = document.createElement('input');
    form31.setAttribute('style', 'display:none');
    form31.setAttribute('name', 'ubcReleaseID');
    var TD3 = document.createElement('td');
    TD3.appendChild(form3);
    TD3.appendChild(form31);
    TD3.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD3);

    /* Release */
    var form4 = document.createElement('input');
    form4.setAttribute('style', 'width:100px; font-size:x-small');
    form4.setAttribute('class', 'wob');
    form4.setAttribute('name', 'ubcRelease');
    var TD4 = document.createElement('td');
    TD4.appendChild(form4);
    TD4.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD4);

    /* Project */
    var form8 = document.createElement('select');
    if (document.getElementById("ubcProject_")) {
        form8.setAttribute('name', 'ubcProject');
        form8.setAttribute('class', 'wob');
        form8.setAttribute('style', 'font-weight: bold;width: 50px;font-style: italic; font-size:x-small');
        form8.innerHTML = (form8.innerHTML + document.getElementById('ubcProject_').innerHTML);
    }
    var TD8 = document.createElement('td');
    TD8.appendChild(form8);
    TD8.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD8);


    /* Ticket */
    var form81 = document.createElement('input');
    form81.setAttribute('style', 'width:50px; font-size:x-small');
    form81.setAttribute('class', 'wob');
    form81.setAttribute('name', 'ubcTicketIDFixed');
    var TD81 = document.createElement('td');
    TD81.appendChild(form81);
    TD81.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD81);

    /* Bug */
    var form82 = document.createElement('input');
    form82.setAttribute('style', 'width:50px; font-size:x-small');
    form82.setAttribute('class', 'wob');
    form82.setAttribute('name', 'ubcBugIDFixed');
    var TD82 = document.createElement('td');
    TD82.appendChild(form82);
    TD82.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD82);


    /* Subject */
    var form9 = document.createElement('input');
    form9.setAttribute('style', 'width:300px');
    form9.setAttribute('class', 'wob');
    form9.setAttribute('name', 'ubcSubject');
    var TD9 = document.createElement('td');
    TD9.appendChild(form9);
    TD9.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD9);

    /* ReleaseOwner */
    var form7 = document.createElement('select');
    if (document.getElementById("ubcReleaseOwner_")) {
        form7.setAttribute('name', 'ubcReleaseOwner');
        form7.setAttribute('class', 'wob');
        form7.setAttribute('style', 'font-weight: bold;width: 100px;font-style: italic; font-size:x-small');
        form7.innerHTML = (form7.innerHTML + document.getElementById('ubcReleaseOwner_').innerHTML);
    }
    var TD7 = document.createElement('td');
    TD7.appendChild(form7);
    TD7.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD7);


    /* Link */
    var form6 = document.createElement('input');
    form6.setAttribute('style', 'width:250px');
    form6.setAttribute('class', 'wob');
    form6.setAttribute('name', 'ubcLink');
    var TD6 = document.createElement('td');
    TD6.appendChild(form6);
    TD6.setAttribute('colspan', '2');
    TD6.setAttribute('style', 'background-color:lightgrey');
    TR.appendChild(TD6);




    document.getElementById(tableau).appendChild(TR);
}


function hidebutton(buttonID) {
    document.getElementById(buttonID).style.display = "none";
}

function getMaxValueForParentElementIdAndElementName(parentElementId, elementName) {
    var elements = null;
    var value = 0;

    if (parentElementId) {
        elements = $('#' + parentElementId + ' [name="' + elementName + '"]');
    } else {
        elements = document.getElementsByName(elementName);
    }

    if (elements && elements.length > 0) {
        for (i = 0; i <= elements.length; i++) {
            if (elements[i] && elements[i].value && value < parseInt(elements[i].value)) {
                value = parseInt(elements[i].value);
            }
        }
    }
    return value;
}


function displayImportStep(attribute) {
    var value = getMaxValueForParentElementIdAndElementName(null, 'testcasestep_hidden');
    if (value && parseInt(value) > 0) {
        value = parseInt(value) + 10;
    } else {
        value = 10;
    }

    document.getElementById('import_step').value = value;

    var testSelected = GetCookie("ImportUseTest");
    if(testSelected) {
        $("#fromTest option[value='"+testSelected+"']").attr("selected","selected");
        getTestCasesForImportStep();
    }

    $('#ImportStepButton').hide();
    $('#ImportStepTable').fadeIn(1000);
    $('#importbutton').removeAttr('onclick').attr('onclick', attribute);
    if (attribute === "useStep()"){
        document.getElementById('import_description').style.display="inline";
    }
}

function getTestCasesForImportStep() {
    var selectTest = document.getElementById('fromTest');
    var testSelected = selectTest.options[selectTest.selectedIndex].value;

    var URL = './ImportTestCase.jsp?Test=' + encodeURI(testSelected);

    SetCookie("ImportUseTest",testSelected);
    var getImportUseTestCase = GetCookie("ImportUseTestCase");

    var selectTestCase = document.getElementById('fromTestCase');
    if (selectTestCase !== null && selectTestCase.selectedIndex >= 0) {
        var testCaseSelected = selectTestCase.options[selectTestCase.selectedIndex].value;
        URL += '&TestCase=' + encodeURI(testCaseSelected);
        SetCookie("ImportUseTestCase",testCaseSelected);
    } else if(getImportUseTestCase && getImportUseTestCase != "") {
        URL += '&TestCase=' + encodeURI(getImportUseTestCase);
    }

    $('#trImportTestCase').load(URL, function() {
        $('#trImportTestCase').fadeIn(250);
    });
}

function importStep() {


    var selectTest = document.getElementById('filtertest');
    var test = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('filtertestcase');
    var testCase = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('fromTest');
    var fromTest = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('fromTestCase');
    var fromTestCase = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('fromStep');
    var fromStep = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('ImportProperty');
    var importProperty;
    if (selectTest.checked) {
        importProperty = selectTest.value;
    } else {
        importProperty = "N";
    }


    var importStep = document.getElementById('import_step').value;
    
    var urlImportStep = './ImportTestCaseStep?';
    urlImportStep += 'Test=' + encodeURI(test);
    urlImportStep += '&TestCase=' + encodeURI(testCase);
    urlImportStep += '&Step=' + encodeURI(importStep);
    urlImportStep += '&FromTest=' + encodeURI(fromTest);
    urlImportStep += '&FromTestCase=' + encodeURI(fromTestCase);
    urlImportStep += '&FromStep=' + encodeURI(fromStep);
    urlImportStep += '&ImportProperty=' + encodeURI(importProperty);

    location.href = urlImportStep;
}

function useStep() {


    var selectTest = document.getElementById('filtertest');
    var test = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('filtertestcase');
    var testCase = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('fromTest');
    var fromTest = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('fromTestCase');
    var fromTestCase = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('fromStep');
    var fromStep = selectTest.options[selectTest.selectedIndex].value;

    selectTest = document.getElementById('ImportProperty');
    var importProperty;
    if (selectTest.checked) {
        importProperty = selectTest.value;
    } else {
        importProperty = "N";
    }


    var importStep = document.getElementById('import_step').value;
    var importDescription = document.getElementById('import_description').value;
    
    var urlImportStep = './UseTestCaseStep?';
    urlImportStep += 'Test=' + encodeURI(test);
    urlImportStep += '&TestCase=' + encodeURI(testCase);
    urlImportStep += '&Step=' + encodeURI(importStep);
    urlImportStep += '&FromTest=' + encodeURI(fromTest);
    urlImportStep += '&FromTestCase=' + encodeURI(fromTestCase);
    urlImportStep += '&FromStep=' + encodeURI(fromStep);
    urlImportStep += '&ImportProperty=' + encodeURI(importProperty);
    urlImportStep += '&Description=' + encodeURI(importDescription);

    location.href = urlImportStep + "#useStep";
}

function submitTestCaseModification(anchor) {
    var form = $("#UpdateTestCaseDetail");
    var allControlsToDelete = 0;

    var actionsToDelete = $("input[name='actions_delete']:checked");
    if (actionsToDelete.length > 0) {
        for (var i = 0; i < actionsToDelete.length; i++) {
            allControlsToDelete = eval(allControlsToDelete + $("td.controls_" + $(actionsToDelete[i]).val()).length);
        }
    }


    var execute = true;
    if (allControlsToDelete > 0) {
        execute = confirm("Your action will delete " + actionsToDelete.length + " action(s) and " +
                allControlsToDelete + " control(s).\nDo you want to continue ?");
    }

    if (execute) {
        form.attr("action", form.attr("action") + "#" + anchor);
        form.submit();
    }

    return false;
}

function openViewPropertyPopin(propertyID, test, testcase) {
    loadPropertyPopin(propertyID, test, testcase);
    $('#popin').dialog({hide: {duration: 300}, height: 300, width: 700, buttons: [{text: "Ok", click: function() {
                    $(this).dialog("close");
                }}]});
}

function loadPropertyPopin(propertyID, test, testcase) {
//    $('#popin').hide().empty();
    ;
    var value = $(document.getElementById(propertyID)).val();
    var db = $('select#properties_dtb' + propertyID + '[name=\'properties_dtb\']').val();
    var type = $(document.getElementById('type'+propertyID)).val();

    $('#popin').load('ViewProperty.jsp?type=' + encodeURI(type) + '&db=' + encodeURI(db) + '&test=' + encodeURI(test) + '&testcase=' + encodeURI(testcase) + '&property=' + encodeURI(value));
//    $('#popin').show();
}

function openSqlLibraryPopin(value) {
    loadSqlLibraryPopin(value);
    $('#popin').dialog({hide: {duration: 300}, height: 600, width: 800, buttons: [{text: "Ok", click: function() {
                    $(this).dialog("close");
                }}]});
}

function loadSqlLibraryPopin(value) {
//    $('#popin').hide().empty();
    $('#popin').load('SqlLib.jsp?Lign=' + value);
//    $('#popin').show();
}


function getCountrySelectBox() {
    $.get('GetCountryForTestCase', {test: $('#test').val(), testCase: $('#testCase').val()}, function(data) {
        $('#country').empty().append($("<option></option>"));
        for (var i = 0; i < data.countriesList.length; i++) {
            $('#country').append($("<option></option>")
                    .attr("value", data.countriesList[i])
                    .text(data.countriesList[i]));
        }
    });
}
;

function getEnvironmentSelectBox() {
    $.get('GetEnvironmentAvailable', {test: $('#test').val(), testCase: $('#testCase').val(), country: $('#country').val()}, function(data) {
        $('#environment').empty().append($("<option></option>"));
        for (var i = 0; i < data.envList.length; i++) {
            $('#environment').append($("<option></option>")
                    .attr("value", data.envList[i].environment)
                    .text(data.envList[i].description));
        }
    });
}
;

function calculateProperty() {
    var query = {test: $("#test").val(),
        testCase: $("#testCase").val(),
        property: $("#property").val(),
        type: $("#type").val()
    };

    if (query.type !== "executeSoapFromLib" && query.type !== "getFromTestData") {
        query.country = $("#country").val();
        query.environment = $("#environment").val();
        query.database = $("#db").val();
    }

    $.get('CalculatePropertyForTestCase', query, function(data) {

        if (data !== null && data.resultList !== null) {
            $("#result").empty().text("Value: '"+data.resultList+"'");
            $("#propdesc").empty().text("Description: '"+data.description+"'");
        } else {
            $("#result").empty().append("<b>Unable to retrieve property in database !</b>");
        }
    });
}
;

function deleteTestCase(test, testcase, page) {
    if (confirm('Do you really want to delete this TestCase ? This operation cannot be reverted')) {
        $("#deleteTCDiv").append('<img src="images/loading.gif">');
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "DeleteTestCase?test=" + test + "&testcase=" + testcase + "&fromPage=" + page, false);
        xhttp.send();
        var xmlDoc = xhttp.responseText;
        location.href=(page+"?Test="+test);
    }

}

function exportTestCase(test, testcase, page) {
        location.href=("ExportTestCase?test="+test+"&testcase="+testcase);
    }

function alertOnProperties() {
    return confirm("At least one property has empty name or no country selected, would you like to save, these properties will be deleted !");
}

function checkForm() {
    // Check all properties to be sure PK of each is OK
    var numberOfProperties = $("input[name='properties_property']").length;
    for(var index=1; index <= numberOfProperties; index++) {

        // Check if name of property is not empty
        if($("input.properties_id_"+index+"[name='properties_property']").val() == "") {
            return alertOnProperties();
        } else {
            if($("input.properties_id_"+index+"[name='properties_country']:checked").length <= 0) {
                return alertOnProperties();
            }
        }
    }
    return true;
}

function addTestCaseActionNew(table, step) {

    var incAct = document.getElementsByName('action_increment_'+step).length;
    var inc = incAct;
    incAct++;
    var DIV = document.createElement('div');
    
    var StepNum = document.getElementById('initial_step_number_'+step).value;


//    var form0 = document.createElement('p');                                                
//    form0.setAttribute('style', 'height:50px;transform: rotate(-90deg);color:white');
//    form0.innerHTML = 'Action';
    var DIV0 = document.createElement('div');
    DIV0.setAttribute('style', 'background-color:blue; width:8px;height:50px;display:inline-block;float:left');
    //DIV0.appendChild(form0);
    DIV.appendChild(DIV0);
    /* Delete box */
    var form1 = document.createElement('input'); /* Create form */
    form1.setAttribute('type', 'checkbox');
    form1.setAttribute('style', 'margin-top:20px;width: 30px; background-color: transparent');
    form1.setAttribute('value', '');
    form1.setAttribute('class', 'wob');
    form1.setAttribute('name', 'action_delete_'+step+'_'+incAct);
    var DIV1 = document.createElement('div'); /* Create column */
    DIV1.setAttribute('style', 'display:inline-block;float:left;height:50px;background-color: transparent');
    DIV1.appendChild(form1); /* Add form to column */

    var form = document.createElement('input');
    form.setAttribute('type', 'hidden');
    form.setAttribute('name', 'action_increment_'+step);
    form.setAttribute('value', incAct);
    DIV1.appendChild(form);
    
    var form11 = document.createElement('input');
    form11.setAttribute('type', 'hidden');
    form11.setAttribute('name', 'action_step_'+step+'_'+incAct);
    form11.setAttribute('value', StepNum);
    DIV1.appendChild(form11);
    
    DIV.appendChild(DIV1);

    /* Button */
    var form41 = document.createElement('img');
    form41.setAttribute('value', 'Add Action');
    form41.setAttribute('src', 'images/addAction.png');
    form41.setAttribute('style', 'width:15px; height:15px');
    form41.setAttribute('onclick', 'addTestCaseActionNew(\'StepListOfActionDiv'+step+incAct+'\', \''+step+'\')');
    var DIV41 = document.createElement('div');
    DIV41.setAttribute('style', 'height:100%;width:100%;clear:both;color:blue;font-weight:bold;font-size:10px ;font-family: Trebuchet MS; background-color: transparent');
    DIV41.appendChild(form41);
    
    var form42 = document.createElement('img');
    form42.setAttribute('value', 'Add Control');
    form42.setAttribute('src', 'images/addControl.png');
    form42.setAttribute('style', 'width:15px; height:15px');
    form42.setAttribute('onclick', 'addTestCaseControlNew(\'StepListOfActionDiv'+step+incAct+'\', \''+step+'\', \''+incAct+'\')');
    var DIV42 = document.createElement('div');
    DIV42.setAttribute('style', 'height:100%;width:100%;clear:both;color:blue;font-weight:bold;font-size:10px ;font-family: Trebuchet MS; background-color: transparent');
    DIV42.appendChild(form42);
    var DIV4 = document.createElement('div');
    DIV4.setAttribute('style', 'margin-top:15px;height:100%;width:3%;float:left;color:blue;font-weight:bold;font-size:10px ;font-family: Trebuchet MS; background-color: transparent');
    DIV4.appendChild(DIV41);
    DIV4.appendChild(DIV42);
    DIV.appendChild(DIV4);
    
    /* Sequence */

    var value = getMaxValueForParentElementIdAndElementName(table, 'action_sequence_'+step+'_'+inc);

    if (value && parseInt(value) > 0) {
        value = parseInt(value) + 10;
    } else {
        value = 10;
    }

    var form2 = document.createElement('input');
    form2.setAttribute('name', 'action_sequence_'+step+'_'+incAct);
    form2.setAttribute('id', 'action_sequence_'+step+'_'+incAct);
    form2.setAttribute('style',
                    'width: 40px; font-weight: bold; background-color: transparent; height:100%; color: #FF0000;');
    form2.setAttribute('class', 'wob');
    form2.setAttribute('value', value);
    var DIV2 = document.createElement('div');
    DIV2.setAttribute('style', 'height:50px;display:inline-block;float:left');
    DIV2.appendChild(form2);
    DIV.appendChild(DIV2);
    
           
    var form5121 = document.createElement('p');
    form5121.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5121.innerHTML = 'Description';
    var form512 = document.createElement('div');
    form512.setAttribute('style','float:left;width:80px;');
    form512.appendChild(form5121);
    var form511 = document.createElement('input');
    form511.setAttribute('name', 'action_description_'+step+'_'+incAct);
    form511.setAttribute('id', 'action_description_'+step+'_'+incAct);
    form511.setAttribute('placeholder', 'Description');
    form511.setAttribute('style',
                    'float:left;width: 80%; background-color: transparent; font-weight:bold;font-size:15px ;font-family: Trebuchet MS; color:#333333border-style:groove;border-width:thin;border-color:white;border: 1px solid white; ');
    form511.setAttribute('class', 'wob functional_description');
    var DIV511 = document.createElement('div');
    DIV511.setAttribute('style', 'float:left; width:80%');
    DIV511.appendChild(form512);
    DIV511.appendChild(form511);
    var DIV51 = document.createElement('div');
    DIV51.setAttribute('style', 'height:30px;display:inline-block;clear:both;width:100%; background-color: transparent');
    DIV51.setAttribute('class', 'functional_description');
    DIV51.appendChild(DIV511);
    
    var form5211 = document.createElement('p');
    form5211.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5211.innerHTML = 'Action';
    var form5212 = document.createElement('div');
    form5212.setAttribute('style','float:left;width:80px;');
    form5212.appendChild(form5211);
    var form521 = document.createElement('select');
    if (document.getElementById("action_action_temp")) {
        form521.setAttribute('name', 'action_action_'+step+'_'+incAct);
        form521.setAttribute('style', 'width: 70%');
        form521.setAttribute('class', 'wob');
        form521.innerHTML = (form521.innerHTML + document
                .getElementById('action_action_temp').innerHTML);
    }
    var DIV521 = document.createElement('div');
    DIV521.setAttribute('style', 'width: 30%; float:left; background-color: transparent');
    DIV521.setAttribute('class', 'technical_part');
    DIV521.appendChild(form5212);
    DIV521.appendChild(form521);
    
    var form5221 = document.createElement('p');
    form5221.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5221.innerHTML = 'Object';
    var form5222 = document.createElement('div');
    form5222.setAttribute('style','float:left;width:19%;');
    form5222.appendChild(form5221);
    var form522 = document.createElement('input');
    form522.setAttribute('name', 'action_object_'+step+'_'+incAct);
    form522.setAttribute('id', 'action_object_'+step+'_'+incAct);
    form522.setAttribute('style',
                    'width:80%; background-color: transparent;border-style:groove;border-width:thin;border-color:white;border: 1px solid white;');
    form522.setAttribute('class', 'wob');
    form522.setAttribute('class', 'functional_description');
    var DIV522 = document.createElement('div');
    DIV522.setAttribute('style', 'width: 40%; float:left; background-color: transparent;');
    DIV522.setAttribute('class', 'technical_part');
    DIV522.appendChild(form5222);
    DIV522.appendChild(form522);
    
    var form5231 = document.createElement('p');
    form5231.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5231.innerHTML = 'Property';
    var form5232 = document.createElement('div');
    form5232.setAttribute('style','float:left;width:19%;');
    form5232.appendChild(form5231);
    var form523 = document.createElement('input');
    form523.setAttribute('name', 'action_property_'+step+'_'+incAct);
    form523.setAttribute('id', 'action_property_'+step+'_'+incAct);
    form523.setAttribute('style',
                    'width:80%; background-color: transparent;;border-style:groove;border-width:thin;border-color:white;border: 1px solid white;');
    form523.setAttribute('class', 'wob property_value');
    form523.setAttribute('class', 'technical_part');
    var DIV523 = document.createElement('div');
    DIV523.setAttribute('style', 'width: 30%; float:left; background-color: transparent');
    DIV523.setAttribute('class', 'technical_part');
    DIV523.appendChild(form5232);
    DIV523.appendChild(form523);
    
    var DIV52 = document.createElement('div');
    DIV52.setAttribute('style', 'display:inline-block;clear:both; height:20px;width:100%;background-color:transparent');
    DIV52.appendChild(DIV521);
    DIV52.appendChild(DIV522);
    DIV52.appendChild(DIV523);
                                                           
    var DIV5 = document.createElement('div');
    DIV5.setAttribute('style', 'height:100%;width:90%;float:left; display:inline-block');
    DIV5.appendChild(DIV51);
    DIV5.appendChild(DIV52);
    DIV.appendChild(DIV5);
    
//    var form10 = document.createElement('p');                                                
//    form10.setAttribute('style', 'height:50px;transform: rotate(-90deg);color:white');
//    form10.innerHTML = 'Action';
    var DIV10 = document.createElement('div');
    DIV10.setAttribute('style', 'background-color:blue; width:3px;height:50px;display:inline-block;float:right');
    //DIV10.appendChild(form10);
    DIV.appendChild(DIV10);
    DIV.setAttribute('style', 'display:inline-block; height:100%; width:100%;background-color:#C4EBFF');
    DIV.setAttribute('id', 'StepListOfActionDiv'+step+incAct);

    //document.getElementById(table).appendChild(DIV);
    var referenceNode = document.getElementById(table);
    referenceNode.parentNode.insertBefore(DIV, referenceNode.nextSibling);
    document.getElementById('incrementActionNumber'+step).value=incAct;
}

var numberOfCall = 0;

function addStepNew(div) {

    var incStep = document.getElementsByName('step_increment').length;
    var inc = incStep;
    incStep++;
    
    var table = document.createElement('div');
    table.setAttribute('id', 'table');
    table.setAttribute('class', 'StepHeaderDiv');

    TR = document.createElement('tr');
    table.appendChild(TR);

    TR.appendChild(document.createTextNode("  Step ID  :"));
    var input1 = document.createElement('input');
    input1.setAttribute('style',
            'font-weight: bold;font-style: italic; width:20px');
    input1.setAttribute('name', 'step_number_'+incStep);
    input1.setAttribute('class', 'wob');
    input1.setAttribute('title', 'Step ID');

    var value = getMaxValueForParentElementIdAndElementName(null, 'step_number_'+inc);
    if (value && parseInt(value) > 0) {
        value = parseInt(value) + 10;
    } else {
        value = 10;
    }

    input1.setAttribute('value', value);
    
    var input2 = document.createElement('input');
    input2.setAttribute('style','display:none');
    input2.setAttribute('name', 'step_increment');
    input2.setAttribute('value', incStep);
    
    
    var TD1 = document.createElement('td'); /* Create column */
    TD1.setAttribute('style', 'background-color:#e1e7f3; text-align: center; valign:center');
    TD1.setAttribute('class', 'wob');
    TD1.appendChild(input1); /* Add form to column */
    TD1.appendChild(input2);
    TR.appendChild(TD1);

    TR.appendChild(document.createTextNode("  Step Description  :"));
    var input2 = document.createElement('input');
    input2.setAttribute('size', '100%');
    input2.setAttribute('class', 'wob');
    input2.setAttribute('style', 'width : 500px');
    input2.setAttribute('name', 'step_description_'+incStep);
    var TD2 = document.createElement('td'); /* Create column */
    TD2.setAttribute('style', 'background-color:#e1e7f3; text-align: center');
    TD2.setAttribute('class', 'wob');
    TD2.appendChild(input2); /* Add form to column */
    TR.appendChild(TD2);

    var TD7 = document.createElement('td');
    TD7.setAttribute('class', 'wob');
    TR.appendChild(TD7);

    TR2 = document.createElement('tr');

    var TD13 = document.createElement('td');
    TD13.setAttribute('style', 'width:10px');
    TD13.setAttribute('class', 'wob');
    TR2.appendChild(TD13);

    var input4 = document.createElement('input');
    input4.setAttribute('type', 'submit');
    input4.setAttribute('value', 'Save Changes');

    table.appendChild(input4);


    table.appendChild(document.createElement('br'));
    table.appendChild(document.createElement('br'));
    
    var form5 = document.createElement('input');
    form5.setAttribute('type','button');
    form5.setAttribute('value','Add Step');
    form5.setAttribute('onclick','addStepNew(\'StepsEndDiv'+incStep+'\')');
    var DIV5 = document.createElement('div');
    DIV5.setAttribute('style', 'float:left');
    DIV5.appendChild(form5);
    var form6 = document.createElement('input');
    form6.setAttribute('type','button');
    form6.setAttribute('value','Save Changes');
    form6.setAttribute('onclick','submitTestCaseModificationNew(\'stepAnchor_'+incStep+'\')');
    var DIV6 = document.createElement('div');
    DIV6.setAttribute('style', 'float:left');
    DIV6.appendChild(form6);
    var DIV7 = document.createElement('div');
    DIV7.setAttribute('style', 'display:inline-block; width:100%');
    DIV7.setAttribute('id', 'StepsEndDiv'+incStep);
    
    table.appendChild(DIV5);                            
    table.appendChild(DIV6);
    table.appendChild(DIV7);
    
    var referenceNode = document.getElementById(div);
    referenceNode.parentNode.insertBefore(table, referenceNode.nextSibling);
    document.getElementById('incrementStepNumber').value=incStep;
    
}

function addTestCaseControlNew(table, incrementStep, incrementAction ) {
    
    var DIV = document.createElement('div');

var incCtrl = 0;
if (document.getElementById('control_increment_'+incrementStep+'_'+incrementAction) !== null){
    incCtrl = document.getElementById('control_increment_'+incrementStep+'_'+incrementAction).length;
}
    var inc = incCtrl;
    incCtrl++;
    
//    var form0 = document.createElement('p');                                                
//    form0.setAttribute('style', 'height:50px;transform: rotate(-90deg);color:white');
//    form0.innerHTML = 'Control';
    var DIV0 = document.createElement('div');
    DIV0.setAttribute('style', 'width:8px;height:50px;display:inline-block;float:left');
    //DIV0.appendChild(form0);
    DIV.appendChild(DIV0);
    
    var StepNum = document.getElementById('initial_step_number_'+incrementStep).value;
    /* Delete box */
    var form1 = document.createElement('input'); /* Create form */
    form1.setAttribute('type', 'checkbox');
    form1.setAttribute('style', 'width:30px');
    form1.setAttribute('class', 'wob');
    form1.setAttribute('name', 'control_delete_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    var DIV1 = document.createElement('div'); /* Create column */
    DIV1.setAttribute('style', 'display:inline-block;float:left;height:50px;background-color: transparent');
    DIV1.appendChild(form1); 
    
    var form = document.createElement('input');
    form.setAttribute('type', 'hidden');
    form.setAttribute('name', 'control_increment_'+incrementStep+'_'+incrementAction);
    form.setAttribute('value', incCtrl);
    DIV1.appendChild(form);
    
    var form11 = document.createElement('input');
    form11.setAttribute('type', 'hidden');
    form11.setAttribute('name', 'control_step_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form11.setAttribute('value', StepNum);
    DIV1.appendChild(form11);

    DIV.appendChild(DIV1);
    
    /* Button */
    var form41 = document.createElement('img');
    form41.setAttribute('value', 'Add Action');
    form41.setAttribute('src', 'images/addAction.png');
    form41.setAttribute('style', 'width:15px; height:15px');
    form41.setAttribute('onclick', 'addTestCaseActionNew(\'StepListOfControlDiv' + incrementStep + incrementAction + incCtrl + '\', \''+incrementStep+'\')');
    var DIV41 = document.createElement('div');
    DIV41.setAttribute('style', 'height:100%;width:100%;clear:both;color:blue;font-weight:bold;font-size:10px ;font-family: Trebuchet MS; background-color: transparent');
    DIV41.appendChild(form41);
    
    var form42 = document.createElement('img');
    form42.setAttribute('value', 'Add Control');
    form42.setAttribute('src', 'images/addControl.png');
    form42.setAttribute('style', 'width:15px; height:15px');
    form42.setAttribute('onclick', 'addTestCaseControlNew(\'StepListOfControlDiv'+incrementStep+ incrementAction + incCtrl + '\', \''+incrementStep+'\', \''+incrementAction+'\')');
    var DIV42 = document.createElement('div');
    DIV42.setAttribute('style', 'height:100%;width:100%;clear:both;color:blue;font-weight:bold;font-size:10px ;font-family: Trebuchet MS; background-color: transparent');
    DIV42.appendChild(form42);
    var DIV4 = document.createElement('div');
    DIV4.setAttribute('style', 'height:100%;width:3%;float:left;color:blue;font-weight:bold;font-size:10px ;font-family: Trebuchet MS; background-color: transparent');
    DIV4.appendChild(DIV41);
    DIV4.appendChild(DIV42);
    DIV.appendChild(DIV4);
    
  
    /* Sequence */

    var value = getMaxValueForParentElementIdAndElementName(table, 'control_sequence_'+incrementStep+'_'+incrementAction+'_'+inc);

    if (value && parseInt(value) > 0) {
        value = parseInt(value) + 10;
    } else {
        value = 10;
    }

    var form2 = document.createElement('input');
    form2.setAttribute('name', 'control_sequence_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form2.setAttribute('id', 'control_sequence_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form2.setAttribute('size', '6%');
    form2.setAttribute('style',
                    'width: 20px; font-weight: bold; background-color: transparent; height:100%; color: #FF0000;');
    form2.setAttribute('class', 'wob');
    form2.setAttribute('value', value);
    var form21 = document.createElement('input');
    form21.setAttribute('name', 'control_control_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form21.setAttribute('id', 'control_control_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form21.setAttribute('size', '6%');
    form21.setAttribute('style',
                    'width:20px; font-weight: bold; background-color: transparent; height:100%; color: #FF0000;');
    form21.setAttribute('class', 'wob');
    form21.setAttribute('value', value);
    var DIV2 = document.createElement('div');
    DIV2.setAttribute('style', 'height:50px;display:inline-block;float:left');
    DIV2.appendChild(form2);
    DIV2.appendChild(form21);
    DIV.appendChild(DIV2);
    
    var form5121 = document.createElement('p');
    form5121.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5121.innerHTML = 'Description';
    var form512 = document.createElement('div');
    form512.setAttribute('style','float:left;width:80px;');
    form512.appendChild(form5121);
    var form511 = document.createElement('input');
    form511.setAttribute('name', 'control_description_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form511.setAttribute('id', 'control_description_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form511.setAttribute('placeholder', 'Description');
    form511.setAttribute('style',
                    'width: 70%; background-color: transparent; font-weight:bold;font-size:15px ;font-family: Trebuchet MS; color:#333333 ');
    form511.setAttribute('class', 'wob functional_description');
    var DIV511 = document.createElement('div');
    DIV511.setAttribute('style', 'float:left; width:70%');
    DIV511.appendChild(form512);
    DIV511.appendChild(form511);
    var DIV51 = document.createElement('div');
    DIV51.appendChild(DIV511);
    DIV51.setAttribute('style', 'height:30px;display:inline-block;clear:both;width:100%; background-color: transparent');
    DIV51.setAttribute('class', 'functional_description');
    
    var form5211 = document.createElement('p');
    form5211.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5211.innerHTML = 'Control';
    var form5212 = document.createElement('div');
    form5212.setAttribute('style','float:left;width:80px;');
    form5212.appendChild(form5211);
    var form521 = document.createElement('select');
    if (document.getElementById("controls_type_")) {
        form521.setAttribute('name', 'control_type_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
        form521.setAttribute('style', 'width: 70%');
        form521.setAttribute('class', 'wob');
        form521.innerHTML = (form521.innerHTML + document
                .getElementById('controls_type_').innerHTML);
    }
    var DIV521 = document.createElement('div');
    DIV521.setAttribute('style', 'width: 30%; float:left; background-color: transparent');
    DIV521.setAttribute('class', 'technical_part');
    DIV521.appendChild(form5212);
    DIV521.appendChild(form521);
    
    var form5221 = document.createElement('p');
    form5221.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5221.innerHTML = 'CtrlObject';
    var form5222 = document.createElement('div');
    form5222.setAttribute('style','float:left;width:19%;');
    form5222.appendChild(form5221);
    var form522 = document.createElement('input');
    form522.setAttribute('name', 'control_value_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form522.setAttribute('id', 'control_value_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form522.setAttribute('style',
                    'width:80%; background-color: transparent;');
    form522.setAttribute('class', 'wob');
    form522.setAttribute('class', 'functional_description');
    var DIV522 = document.createElement('div');
    DIV522.setAttribute('style', 'width: 40%; float:left; background-color: transparent');
    DIV522.setAttribute('class', 'technical_part');
    DIV522.appendChild(form5222);
    DIV522.appendChild(form522);
    
    var form5231 = document.createElement('p');
    form5231.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form5231.innerHTML = 'CtrlProp';
    var form5232 = document.createElement('div');
    form5232.setAttribute('style','float:left;width:19%;');
    form5232.appendChild(form5231);
    var form523 = document.createElement('input');
    form523.setAttribute('name', 'control_property_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form523.setAttribute('id', 'control_property_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
    form523.setAttribute('style',
                    'width:70%; background-color: transparent;');
    form523.setAttribute('class', 'wob property_value');
    form523.setAttribute('class', 'technical_part');
    var DIV523 = document.createElement('div');
    DIV523.setAttribute('style', 'width: 20%; float:left; background-color: transparent');
    DIV523.setAttribute('class', 'technical_part');
    DIV523.appendChild(form5232);
    DIV523.appendChild(form523);
    
    /* Fatal */
    var form71 = document.createElement('p');
    form71.setAttribute('style', 'float:right;font-weight:bold;color:white;');
    form71.innerHTML = 'Fatal';
    var form72 = document.createElement('div');
    form72.setAttribute('style','float:left;width:69%;');
    form72.appendChild(form71);
    var form7 = document.createElement('select');
    if (document.getElementById("controls_fatal_")) {
        form7.setAttribute('name', 'control_fatal_'+incrementStep+'_'+incrementAction+'_'+incCtrl);
        form7.setAttribute('class', 'wob');
        form7.setAttribute('style', 'width: 30%');
        form7.innerHTML = (form7.innerHTML + document
                .getElementById('controls_fatal_').innerHTML);
    }
    var DIV7 = document.createElement('div');
    DIV7.setAttribute('style', 'width:8%; float:left');
    if (displayOnlyFunctional) {
        DIV7.setAttribute('class', 'technical_part only_functional');
    } else {
        DIV7.setAttribute('class', 'technical_part');
    }

    DIV7.appendChild(form72);
    DIV7.appendChild(form7);
    
    
    
    var DIV52 = document.createElement('div');
    DIV52.setAttribute('style', 'display:inline-block;clear:both; height:20px;width:100%;background-color:transparent');
    DIV52.appendChild(DIV521);
    DIV52.appendChild(DIV522);
    DIV52.appendChild(DIV523);
    DIV52.appendChild(DIV7);
                                                           
    var DIV5 = document.createElement('div');
    DIV5.setAttribute('style', 'height:100%;width:90%;float:left; display:inline-block');
    DIV5.appendChild(DIV51);
    DIV5.appendChild(DIV52);
    
    
  
    DIV.appendChild(DIV5);
    
    
//    var form10 = document.createElement('p');                                                
//    form10.setAttribute('style', 'height:50px;transform: rotate(-90deg);color:white');
//    form10.innerHTML = 'Control';
    var DIV10 = document.createElement('div');
    DIV10.setAttribute('style', 'background-color:green; width:3px;height:50px;display:inline-block;float:right');
    
    //DIV10.appendChild(form10);
    DIV.appendChild(DIV10);
    DIV.setAttribute('style', 'background-color:#D4FFBF;display:inline-block;width:100%;');
    DIV.setAttribute('id', 'StepListOfControlDiv'+incrementStep+incrementAction+incCtrl);
    
    
    
    var referenceNode = document.getElementById(table);
    referenceNode.parentNode.insertBefore(DIV, referenceNode.nextSibling);

}

function addTestCasePropertiesNew(tableau, row_number, size, size2) {

    TR = document.createElement('tr');

    /* Delete box */
    // prop_line++;
    var form1 = document.createElement('input');
    form1.setAttribute('type', 'checkbox');
    form1.setAttribute('name', 'properties_delete');
    form1.setAttribute('style', '');
    form1.setAttribute('value', row_number + 1);
    var form11 = document.createElement('input');
    form11.setAttribute('name', 'property_hidden');
    form11.setAttribute('type', 'hidden');
    form11.setAttribute('value', row_number + 1);
    var TD1 = document.createElement('td');
    TD1.setAttribute('style', 'background-color:white; text-align: center');
    TD1.appendChild(form1);
    TD1.appendChild(form11);
    TR.appendChild(TD1);

    /* Property */
    var form2 = document.createElement('input');
    form2.setAttribute('name', 'properties_property');
    form2.setAttribute('class', 'wob properties_id_'+ eval(row_number + 1));
    form2.setAttribute('size', '130%');
    form2
            .setAttribute('style',
                    'width: 130px; font-weight: bold;font-style: italic; color: #FF0000;');
    form2.setAttribute('placeholder', 'Feed Property Name');
    var TD2 = document.createElement('td');
    TD2.setAttribute('style', 'background-color:white');
    TD2.appendChild(form2);
    TR.appendChild(TD2);

    /*
     * Country
     */
    /* Parse values from hidden containing all countries */

    var TD3 = document.createElement('td'); /* Create column */
    if (document.getElementById("toto")) {
        TD3.setAttribute('style', 'font-size : x-small ; width: ' + size
                + 'px;');
        TD3.setAttribute('style', 'background-color: white;');
        
        var jToto = $('#toto');
        jToto.find('input[name="properties_country"]').addClass('properties_id_'+ eval(row_number + 1));
        TD3.innerHTML = (TD3.innerHTML + jToto.html());
        
        // if (document.getElementById("checkbox-AT")) {
        // tata=TD3.getElementById("checkbox-AT")
        // tata.setAttribute('value', prop_line+' - AT');
        // tata.setAttribute('name', property_country);
        // }

    }
    TR.appendChild(TD3);

    /* Type */
    var form4 = document.createElement('select');
    if (document.getElementById("new_properties_type_new_properties_value")) {
        form4.setAttribute('name', 'properties_type');
        form4.setAttribute('id', 'typenew_properties_value');
        form4.setAttribute('style', 'width: 120px');
        form4.setAttribute('onchange', 'activateDatabaseBox(this.value, \'properties_dtb_typeID\' , \'properties_dtb_type_ID\'); activateValue2(this.value, \'tdValue2_new\', \'new_properties_value\',\'new_properties_value2\',\'' + size2 + '\')');
        form4.setAttribute('class', 'wob');
        form4.innerHTML = (form4.innerHTML + document
                .getElementById('new_properties_type_new_properties_value').innerHTML);
//        var form44 = document.createElement('option');
//        form44.setAttribute('Value', 'executeSql');
//        form44.setAttribute('selected', 'selected');
//        form4.appendChild(form44);
    }
    var TD4 = document.createElement('td');
    TD4.setAttribute('style', 'background-color:white');
    TD4.appendChild(form4);
    TR.appendChild(TD4);

    /* Database */
    var form41 = document.createElement('select');
    if (document.getElementById("properties_dtb_")) {
        form41.setAttribute('name', 'properties_dtb');
        form41.setAttribute('style', 'width: 40px');
        form41.setAttribute('style', 'display: inline');
        form41.setAttribute('class', 'wob');
        form41.innerHTML = (form41.innerHTML + document
                .getElementById('properties_dtb_').innerHTML);
        form41.setAttribute('id', 'properties_dtb_typeID');
    }

    var form42 = document.createElement('input');
    form42.setAttribute('style', 'display:none; width: 39px; background-color: white; text-align: center;');
    form42.setAttribute('id', 'properties_dtb_type_ID');
    form42.setAttribute('class', 'wob');
    form42.setAttribute('value', '---');
    var TD41 = document.createElement('td');
    TD41.setAttribute('style', 'background-color:white');
    TD41.appendChild(form41);
    TD41.appendChild(form42);
    TR.appendChild(TD41);

    /* Value */
    var form5 = document.createElement('textarea');
    form5.setAttribute('name', 'properties_value');
    form5.setAttribute('class', 'wob');
    form5.setAttribute('id', 'new_properties_value');
    form5.setAttribute('style', 'width: ' + size2 + 'px');
    var TD5 = document.createElement('td');
    var TB51 = document.createElement('table');
    var TR51 = document.createElement('tr');
    var TD51 = document.createElement('td');
    TD51.setAttribute('style', 'background-color:white');
    TD51.appendChild(form5);
    TD51.setAttribute('class', 'wob');
    TR51.appendChild(TD51);

    var form54 = document.createElement('textarea');
    form54.setAttribute('name', 'properties_value2');
    form54.setAttribute('placeholder', 'Attribute');
    form54.setAttribute('class', 'wob');
    form54.setAttribute('id', 'new_properties_value2');
    var TD52 = document.createElement('td');
    TD52.setAttribute('style', 'background-color:white; display:none');
    TD52.setAttribute('id', 'tdValue2_new');
    TD52.appendChild(form54);
    TD52.setAttribute('class', 'wob');
    TR51.appendChild(TD52);

    var form52 = document.createElement('input');
    form52.setAttribute('style', 'display:inline; height:20px; width:20px; background-color: white; color:blue; font-weight:bolder');
    form52.setAttribute('title', 'Open SQL Library');
    form52.setAttribute('class', 'smallbutton');
    form52.setAttribute('type', 'button');
    form52.setAttribute('value', 'L');
    form52.setAttribute('onclick', 'openSqlLibraryPopin(\'new_properties_value\')');

    var TD52 = document.createElement('td');
    TD52.setAttribute('style', 'background-color:white');
    TD52.setAttribute('class', 'wob');
    TD52.appendChild(form52);
    TR51.appendChild(TD52);

    TB51.appendChild(TR51);
    TD5.appendChild(TB51);
    TD5.setAttribute('style', 'background-color: white');
    TR.appendChild(TD5);



    /* Length */
    var form6 = document.createElement('input');
    form6.setAttribute('name', 'properties_length');
    form6.setAttribute('value', 0);
    form6.setAttribute('class', 'wob');
    form6.setAttribute('style', 'width: 40px');
    var TD6 = document.createElement('td');
    TD6.setAttribute('style', 'background-color:white');
    TD6.appendChild(form6);
    TR.appendChild(TD6);

    /* Row Limit */
    var form7 = document.createElement('input');
    form7.setAttribute('name', 'properties_rowlimit');
    form7.setAttribute('value', 0);
    form7.setAttribute('style', 'width: 40px');
    form7.setAttribute('class', 'wob');
    var TD7 = document.createElement('td');
    TD7.setAttribute('style', 'background-color:white');
    TD7.appendChild(form7);
    TR.appendChild(TD7);

    /* Nature */
    var form8 = document.createElement('select');
    if (document.getElementById("properties_nature_")) {
        form8.setAttribute('name', 'properties_nature');
        form8.setAttribute('class', 'wob');
        form8.setAttribute('style', 'width: 80px');
        form8.innerHTML = (form8.innerHTML + document
                .getElementById('properties_nature_').innerHTML);
    }
    var TD8 = document.createElement('td');
    TD8.setAttribute('style', 'background-color:white');
    TD8.appendChild(form8);
    TR.appendChild(TD8);

    document.getElementById(tableau).appendChild(TR);

}

function submitTestCaseModificationNew(anchor) {
    var form = $("#UpdateTestCase");
    var allControlsToDelete = 0;

    var actionsToDelete = $("input[name='action_delete']:checked");
    if (actionsToDelete.length > 0) {
        for (var i = 0; i < actionsToDelete.length; i++) {
            allControlsToDelete = eval(allControlsToDelete + $("td.control_" + $(actionsToDelete[i]).val()).length);
        }
    }


    var execute = true;
    if (allControlsToDelete > 0) {
        execute = confirm("Your action will delete " + actionsToDelete.length + " action(s) and " +
                allControlsToDelete + " control(s).\nDo you want to continue ?");
    }

    if (execute) {
        form.attr("action", form.attr("action") + "#" + anchor);
        form.submit();
    }

    return false;
}

function SetCookie (name, value) {
	var argv=SetCookie.arguments;
	var argc=SetCookie.arguments.length;
	var expires=(argc > 2) ? argv[2] : null;
	var path=(argc > 3) ? argv[3] : null;
	var domain=(argc > 4) ? argv[4] : null;
	var secure=(argc > 5) ? argv[5] : false;
	document.cookie=name+"="+escape(value)+
		((expires==null) ? "" : ("; expires="+expires.toGMTString()))+
		((path==null) ? "" : ("; path="+path))+
		((domain==null) ? "" : ("; domain="+domain))+
		((secure==true) ? "; secure" : "");
};


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

function getCookieVal(offset) {
	var endstr=document.cookie.indexOf (";", offset);
	if (endstr==-1)
      		endstr=document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
};

function GetCookie (name) {
	var arg=name+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen) {
		var j=i+alen;
		if (document.cookie.substring(i, j)==arg)
                        return getCookieVal (j);
                i=document.cookie.indexOf(" ",i)+1;
                        if (i==0) break;}
	return null;
};
