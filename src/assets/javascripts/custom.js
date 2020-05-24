/*------------Flat Picker---------------*/
! function(i) {
    "use strict";
    var e = function() {};
    e.prototype.init = function() {
        i("#basic-datepicker").flatpickr({ maxDate: new Date().fp_incr(-6570) }),
        i("#basic-datepicker2").flatpickr({ minDate: new Date().fp_incr(180) }),
        i("#basic-datepicker3").flatpickr(),
        i("#basic-datepicker4").flatpickr({ minDate: new Date() }),
        i("#basic-datepicker5").flatpickr({ minDate: new Date().fp_incr(180) }),
        i("#basic-datepicker6").flatpickr(),
        i("#basic-datepicker7").flatpickr({ maxDate: new Date().fp_incr(-6570) })
    }, i.FormPickers = new e, i.FormPickers.Constructor = e
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.FormPickers.init()
}();

$(document).ready(() => {

	$('#basic-datepicker').on('change', () => {
		var date = $('#basic-datepicker').val()
		var d = new Date();

		var month = d.getMonth()+1;
		var day = d.getDate();

		var output = d.getFullYear() + '-' +
		    ((''+month).length<2 ? '0' : '') + month + '-' +
		    ((''+day).length<2 ? '0' : '') + day;

		if (output < date) {
			alert('Date of Birth cannot be greater than today.')
			$('#basic-datepicker').val('')
		}
	})

	
	$(document).on("click", "#tcbtn", function(){
		$(this).closest("div.row").remove();
	});

	$(document).on("click", "#tsbtn", function(){
		$(this).closest("div.row").remove();
	});

	$(document).on("click", "#dirbtn", function(){
		$(this).closest("div.row").remove();
	});

	$(document).on("click", "#stakebtn", function(){
		$(this).closest("div.row").remove();
	});

	$(document).on("click", "#ytdbtn", function(){
		$(this).closest("div.row").remove();
	});

	$(document).on("click", "#abtn", function(){
		$(this).closest("div.row").remove();
	});

	$(document).on("click", "#bbtn", function(){
		$(this).closest("div.row").remove();
	});

	$('#tc_add_rows_btn').on('click', () => {

		var name_array = []
		$('input[name^="tcname"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('tcname')[1]
			var noofrows = $('#tc_add_rows').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.top-customers').append('<div class="row"><div class="col-md-3"><div class="form-group"><label for="name">Name</label><input type="text" id="tcname'+i+'" name="tcname'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Payment Details</label><input type="text" id="tcpayment'+i+'" name="tcpayment'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Dealing Since</label><input type="text" id="tcdealing'+i+'" name="tcdealing'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Products / Services</label><input type="text" id="tcproducts'+i+'"  name="tcproducts'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="tcbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#tc_add_rows').val()
			for (var i = 1; i <= totrows; i++) {
				$('.top-customers').append('<div class="row"><div class="col-md-3"><div class="form-group"><label for="name">Name</label><input type="text" id="tcname'+i+'" name="tcname'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Payment Details</label><input type="text" id="tcpayment'+i+'" name="tcpayment'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Dealing Since</label><input type="text" id="tcdealing'+i+'" name="tcdealing'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Products / Services</label><input type="text" id="tcproducts'+i+'"  name="tcproducts'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="tcbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#ts_add_rows_btn').on('click', () => {
		var name_array = []
		$('input[name^="tsname"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('tsname')[1]
			var noofrows = $('#ts_add_rows').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.top-suppliers').append('<div class="row"><div class="col-md-3"><div class="form-group"><label for="name">Name</label><input type="text" id="tsname'+i+'" name="tsname'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Payment Details</label><input type="text" id="tspayment'+i+'" name="tspayment'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Dealing Since</label><input type="text" id="tsdealing'+i+'" name="tsdealing'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Products / Services</label><input type="text" id="tsproducts'+i+'"  name="tsproducts'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="tsbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#ts_add_rows').val()
			for (var i = 1; i <= totrows; i++) {
				$('.top-suppliers').append('<div class="row"><div class="col-md-3"><div class="form-group"><label for="name">Name</label><input type="text" id="tsname'+i+'" name="tsname'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Payment Details</label><input type="text" id="tspayment'+i+'" name="tspayment'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Dealing Since</label><input type="text" id="tsdealing'+i+'" name="tsdealing'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Products / Services</label><input type="text" id="tsproducts'+i+'"  name="tsproducts'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="tsbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#dir_add_rows_btn').on('click', () => {
		var name_array = []
		$('input[name^="dirname"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('dirname')[1]
			var noofrows = $('#dir_add_rows').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.directors').append('<div class="row"><div class="col-md-2"><div class="form-group"><label for="name">Name</label><input type="text" id="dirname'+i+'" name="dirname'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Email</label><input type="text" id="diremail'+i+'" name="diremail'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Contact No.</label><input type="text" id="dircontact'+i+'" name="dircontact'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Company</label><input type="text" id="dircompany'+i+'"  name="dircompany'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Emirates</label><input type="text" id="diremirates'+i+'" name="diremirates'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="dirbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#diradd_rows').val()
			for (var i = 1; i <= totrows; i++) {
				$('.directors').append('<div class="row"><div class="col-md-2"><div class="form-group"><label for="name">Name</label><input type="text" id="dirname'+i+'" name="dirname'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Email</label><input type="text" id="diremail'+i+'" name="diremail'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Contact No.</label><input type="text" id="dircontact'+i+'" name="dircontact'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Company</label><input type="text" id="dircompany'+i+'"  name="dircompany'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Emirates</label><input type="text" id="diremirates'+i+'" name="diremirates'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="dirbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#stake_add_rows_btn').on('click', () => {
		var name_array = []
		$('input[name^="stakename"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('stakename')[1]
			var noofrows = $('#stake_add_rows').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.stakeholders').append('<div class="row"><div class="col-md-2"><div class="form-group"><label for="name">Name</label><input type="text" id="stakename'+i+'" name="stakename'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Email</label><input type="text" id="stakeemail'+i+'" name="stakeemail'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Contact No.</label><input type="text" id="stakecontact'+i+'" name="stakecontact'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Company</label><input type="text" id="stakecompany'+i+'"  name="stakecompany'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Emirates</label><input type="text" id="stakeemirates'+i+'" name="stakeemirates'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="stakebtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#stake_add_rows').val()
			for (var i = 1; i <= totrows; i++) {
				$('.stakeholders').append('<div class="row"><div class="col-md-2"><div class="form-group"><label for="name">Name</label><input type="text" id="stakename'+i+'" name="stakename'+i+'" class="form-control"></div></div><div class="col-md-3"><div class="form-group"><label for="name">Email</label><input type="text" id="stakeemail'+i+'" name="stakeemail'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Contact No.</label><input type="text" id="stakecontact'+i+'" name="stakecontact'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Company</label><input type="text" id="stakecompany'+i+'"  name="stakecompany'+i+'" class="form-control"></div></div><div class="col-md-2"><div class="form-group"><label for="name">Emirates</label><input type="text" id="stakeemirates'+i+'" name="stakeemirates'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="stakebtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#ytd_no_bank_loans').on('keyup', () => {
		var name_array = []
		$('input[name^="ytd_bank_name"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('ytd_bank_name')[1]
			var noofrows = $('#ytd_no_bank_loans').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.ytd_bankloans').append('<div class="row"><div class="col-sm-4"><div class="form-group mb-3"><label>Bank name</label><input type="text" id="ytd_bank_name'+i+'" name="ytd_bank_name'+i+'" class="form-control"></div></div><div class="col-sm-4"><div class="form-group mb-3"><label>Amount Limit</label><input type="text" id="ytd_amount_limit'+i+'" name="ytd_amount_limit'+i+'" class="form-control"></div></div><div class="col-sm-3"><div class="form-group mb-3"><label>Outstanding Amount</label><input type="text" id="ytd_outstanding_amount'+i+'" name="ytd_outstanding_amount'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="ytdbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#ytd_no_bank_loans').val()
			for (var i = 1; i <= totrows; i++) {
				$('.ytd_bankloans').append('<div class="row"><div class="col-sm-4"><div class="form-group mb-3"><label>Bank name</label><input type="text" id="ytd_bank_name'+i+'" name="ytd_bank_name'+i+'" class="form-control"></div></div><div class="col-sm-4"><div class="form-group mb-3"><label>Amount Limit</label><input type="text" id="ytd_amount_limit'+i+'" name="ytd_amount_limit'+i+'" class="form-control"></div></div><div class="col-sm-3"><div class="form-group mb-3"><label>Outstanding Amount</label><input type="text" id="ytd_outstanding_amount'+i+'" name="ytd_outstanding_amount'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="ytdbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#a_no_bank_loans').on('keyup', () => {
		var name_array = []
		$('input[name^="a_bank_name"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('a_bank_name')[1]
			var noofrows = $('#a_no_bank_loans').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.a_bankloans').append('<div class="row"><div class="col-sm-4"><div class="form-group mb-3"><label>Bank name</label><input type="text" id="a_bank_name'+i+'" name="a_bank_name'+i+'" class="form-control"></div></div><div class="col-sm-4"><div class="form-group mb-3"><label>Amount Limit</label><input type="text" id="a_amount_limit'+i+'" name="a_amount_limit'+i+'" class="form-control"></div></div><div class="col-sm-3"><div class="form-group mb-3"><label>Outstanding Amount</label><input type="text" id="a_outstanding_amount'+i+'" name="a_outstanding_amount'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="abtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#a_no_bank_loans').val()
			for (var i = 1; i <= totrows; i++) {
				$('.a_bankloans').append('<div class="row"><div class="col-sm-4"><div class="form-group mb-3"><label>Bank name</label><input type="text" id="a_bank_name'+i+'" name="a_bank_name'+i+'" class="form-control"></div></div><div class="col-sm-4"><div class="form-group mb-3"><label>Amount Limit</label><input type="text" id="a_amount_limit'+i+'" name="a_amount_limit'+i+'" class="form-control"></div></div><div class="col-sm-3"><div class="form-group mb-3"><label>Outstanding Amount</label><input type="text" id="a_outstanding_amount'+i+'" name="a_outstanding_amount'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="abtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#b_no_bank_loans').on('keyup', () => {
		var name_array = []
		$('input[name^="b_bank_name"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		if (last != undefined) {
			var lastnum = last.split('b_bank_name')[1]
			var noofrows = $('#b_no_bank_loans').val()
			var total = parseInt(lastnum) + parseInt(noofrows)
			lastnum++
			
			for (var i = lastnum; i <= total; i++) {
				$('.b_bankloans').append('<div class="row"><div class="col-sm-4"><div class="form-group mb-3"><label>Bank name</label><input type="text" id="b_bank_name'+i+'" name="b_bank_name'+i+'" class="form-control"></div></div><div class="col-sm-4"><div class="form-group mb-3"><label>Amount Limit</label><input type="text" id="b_amount_limit'+i+'" name="b_amount_limit'+i+'" class="form-control"></div></div><div class="col-sm-3"><div class="form-group mb-3"><label>Outstanding Amount</label><input type="text" id="b_outstanding_amount'+i+'" name="b_outstanding_amount'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="bbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		} else {
			var totrows = $('#b_no_bank_loans').val()
			for (var i = 1; i <= totrows; i++) {
				$('.b_bankloans').append('<div class="row"><div class="col-sm-4"><div class="form-group mb-3"><label>Bank name</label><input type="text" id="b_bank_name'+i+'" name="b_bank_name'+i+'" class="form-control"></div></div><div class="col-sm-4"><div class="form-group mb-3"><label>Amount Limit</label><input type="text" id="b_amount_limit'+i+'" name="b_amount_limit'+i+'" class="form-control"></div></div><div class="col-sm-3"><div class="form-group mb-3"><label>Outstanding Amount</label><input type="text" id="b_outstanding_amount'+i+'" name="b_outstanding_amount'+i+'" class="form-control"></div></div><div class="col-sm-1 form-group"><label style="visibility: hidden;">Remove</label><button type="button" class="btn btn-danger" id="bbtn"><i class="fas fa-times"></i></button></div></div>')
			}
		}
	})

	$('#b_acc_tl').on('click', function() {

		$('.trade_license button').remove()
		$('.trade_license').append('Accepted')
	})

	$('#b_rej_tl').on('click', function() {

		$.ajax({
			url: 'http://merklejobs.com:3009/admin/b_reject_tl',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				file: $(this).data('name'),
				value: $(this).data('value')
			},
			success: function(result) {
				$('.trade_license button').remove()
				$('.trade_license').append('Rejected')
			}
		})
	})

	$('#b_acc_bp').on('click', function() {

		$('.business_profile button').remove()
		$('.business_profile').append('Accepted')
	})

	$('#b_rej_bp').on('click', function() {

		$.ajax({
			url: 'http://merklejobs.com:3009/admin/b_reject_bp',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				file: $(this).data('name'),
				value: $(this).data('value')
			},
			success: function(result) {
				$('.business_profile button').remove()
				$('.business_profile').append('Rejected')
			}
		})
	})

	$('#b_acc_ar').on('click', function() {

		$('.audit_reports button').remove()
		$('.audit_reports').append('Accepted')
	})

	$('#b_rej_ar').on('click', function() {

		$.ajax({
			url: 'http://merklejobs.com:3009/admin/b_reject_ar',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				file: $(this).data('name'),
				value: $(this).data('value')
			},
			success: function(result) {
				$('.audit_reports button').remove()
				$('.audit_reports').append('Rejected')
			}
		})
	})

	$('#b_acc_od').on('click', function() {

		$('.other_documents button').remove()
		$('.other_documents').append('Accepted')
	})

	$('#b_rej_od').on('click', function() {

		$.ajax({
			url: 'http://merklejobs.com:3009/admin/b_reject_od',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				file: $(this).data('name'),
				value: $(this).data('value')
			},
			success: function(result) {
				$('.other_documents button').remove()
				$('.other_documents').append('Rejected')
			}
		})
	})

	$('#i_acc_pc').on('click', function() {

		$('.passport_copy button').remove()
		$('.passport_copy').append('Accepted')
	})

	$('#i_rej_pc').on('click', function() {

		$.ajax({
			url: 'http://merklejobs.com:3009/admin/i_reject_pc',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				file: $(this).data('name'),
				value: $(this).data('value')
			},
			success: function(result) {
				$('.passport_copy button').remove()
				$('.passport_copy').append('Rejected')
			}
		})
	})

	$('#i_acc_eid').on('click', function() {

		$('.emirates_id button').remove()
		$('.emirates_id').append('Accepted')
	})

	$('#i_rej_eid').on('click', function() {

		$.ajax({
			url: 'http://merklejobs.com:3009/admin/i_reject_eid',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				file: $(this).data('name'),
				value: $(this).data('value')
			},
			success: function(result) {
				$('.emirates_id button').remove()
				$('.emirates_id').append('Rejected')
			}
		})
	})

	$('#add_doc_loan').on('click', () => {
		var name_array = []
		$('input[name^="document_name"]').each(function(index, item){
			var value = $(item).val();
			var name = $(item).attr('name');
			name_array.push(name)
		});
		var last = name_array[name_array.length - 1]
		console.log(last)
		if (last != undefined) {
			var lastnum = last.split('document_name')[1]
			lastnum++
			console.log(lastnum)

			$('.loan_documents').append('<div class="row"><div class="col-md-6 mt-2"><input type="name" class="form-control" placeholder="Ex. Passport / ID" name="document_name'+lastnum+'" id="document_name'+lastnum+'"></div><div class="col-md-5 mt-2"><input type="file" name="document'+lastnum+'" id="fdocument'+lastnum+'" class="form-control"></div><div class="col-md-1 mt-2"><button type="button" class="btn btn-danger" id="remove_doc_loan"><i class="fas fa-times"></i></button></div></div>')
		} else {
			$('.loan_documents').append('<div class="row"><div class="col-md-6"><input type="name" class="form-control" placeholder="Ex. Passport / ID" name="document_name1" id="document_name1"></div><div class="col-md-5"><input type="file" name="document1" id="fdocument1" class="form-control"></div><div class="col-md-1"><button type="button" class="btn btn-danger" id="remove_doc_loan"><i class="fas fa-times"></i></button></div></div>')
		}
	})

	$(document).on("click", "#remove_doc_loan", function(){
		$(this).closest("div.row").remove();
	});

	$('#loan-btn-submit').on('click', () => {
		
		$.ajax({
			url: 'http://merklejobs.com:3009/users/newloan',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				amount: $('#amount').val(),
				description: $('#description').val(),
				moneyusage: $('#moneyusage').val(),
				additionaldetails: $('#additionaldetails').val()
			},
			success: function(result) {

				var id_array = []
				$('input[id^="fdocument"]').each(function(index, item){
					var value = $(item).val();
					var id = $(item).attr('id');
					id_array.push(id)
				});

				var name_array = []
				$('input[id^="document_name"]').each(function(index, item){
					var value = $(item).val();
					var name = $(item).attr('name');
					name_array.push(name)
				});

				var formData = new FormData()

				for (var i = 0; i < id_array.length; i++) {
					var x = $('#'+id_array[i])
					if(x.val()) formData.append(id_array[i], x.get(0).files[0]);
				}

				for (var i = 0; i < name_array.length; i++) {
					var x = $('#'+name_array[i]).val()
					if(x) formData.append(name_array[i], x)
				}

				var request = new XMLHttpRequest();
				request.open('POST', 'http://merklejobs.com:3009/users/loan_docs_upload');
				request.send(formData);
				window.location.href = 'http://merklejobs.com:3009/users/dashboard'

			}
		})
	})

	$('.a_loan_doc_btn').on('click', function () {
		$.ajax({
			url: 'http://merklejobs.com:3009/admin/a_loan_doc_reject',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				id: $(this).data('id'),
				uid: $(this).data('uid')
			},
			success: function(result) {
				result = JSON.parse(result)
				window.location.href = 'http://merklejobs.com:3009/admin/loandetail/'+result.uid
			}
		})
	})

	$('#amounttocalculate').on('keyup', function() {
		if ($('#amounttocalculate').val() < 0) {
			$('#amounttocalculate').css('border', 'red 1px solid')
			$('#amount_error').text('Please enter the positive amount.')
		} else {
			var base = $('#amounttocalculate').val()
			var roi = $('#rateofinterest').val()
			var enddate = $('#loanvalidity').text()
			enddate = new Date(enddate)
			var startdate = new Date()
			var diff = new Date(enddate - startdate)
			var days = diff/86400000
			var dayint = 10 / 365
			var onedayreturns = dayint * base / 100
			var alldaysreturns = (onedayreturns * days) + parseInt(base)
			$('#interestreturns').val(alldaysreturns)

			var amount = $('#amounttocalculate').val()
			var usethis = $('#usethis').val()
			$.ajax({
				url: 'http://merklejobs.com:3009/users/get_user_balance/'+usethis,
				type: 'get',
				success: function (result) {
					var free_funds = parseFloat(result[0].total_deposited)-parseFloat(result[0].total_invested)
					if (amount > free_funds) {
						$('#amounttocalculate').css('border', 'red 1px solid')
						$('#amount_error').text('Please deposit sufficient funds in your account.')
					} else {
						$('#amounttocalculate').css('border', '')
						$('#amount_error').text('')
					}
				}
			})
		}
	})

	$('#invest_form').submit(function(e) {
		var amount = $('#amounttocalculate').val()
		var requested = $('#requested_amount').val()
		var invested = $('#invested_amount').val()
		var required = requested - invested
		if (!$('#amounttocalculate').val()) {
			$('#amounttocalculate').css('border', 'red 1px solid')
			$('#amount_error').text('Please enter the positive amount.')
			e.preventDefault(e)
		}
		if (amount > required) {
			$('#amounttocalculate').css('border', 'red 1px solid')
			$('#amount_error').text('Amount exceeded the required amount.')
			e.preventDefault(e);
		} else {
		}
	})

})