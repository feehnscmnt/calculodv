$(document).ready(function() {
	
	$("#btnCalcularDvCpf").on("click", function() {
		
		if ($("#txtCpf").val().length < 9) {
			
			Swal.fire({
				title: "Oops!",
				text: "É necessário informar os 9 primeiros dígitos do CPF!",
				icon: "error"
			});
			
		} else {
			
			let d1 = $("#txtCpf").val().substring(0, 1);
			let d2 = $("#txtCpf").val().substring(1, 2);
			let d3 = $("#txtCpf").val().substring(2, 3);
			let d4 = $("#txtCpf").val().substring(3, 4);
			let d5 = $("#txtCpf").val().substring(4, 5);
			let d6 = $("#txtCpf").val().substring(5, 6);
			let d7 = $("#txtCpf").val().substring(6, 7);
			let d8 = $("#txtCpf").val().substring(7, 8);
			let d9 = $("#txtCpf").val().substring(8, 9);
			
			let somaDv1 = (d1 * 1) + (d2 * 2) + (d3 * 3) + (d4 * 4) + (d5 * 5) + (d6 * 6) + (d7 * 7) + (d8 * 8) + (d9 * 9);
			let dv1 = somaDv1 % 11;
			
			let somaDv2 = (d1 * 0) + (d2 * 1) + (d3 * 2) + (d4 * 3) + (d5 * 4) + (d6 * 5) + (d7 * 6) + (d8 * 7) + (d9 * 8) + (dv1 * 9);
			let dv2 = somaDv2 % 11;
			
			$("#txtDvCpf").val(dv1 + "" + dv2);
			
			$("#btnValidarCpf").prop("disabled", false);
			
		}
		
	});
	
	$("#btnValidarCpf").on("click", function() {
		
		if (validarCpf($("#txtCpf").val() + $("#txtDvCpf").val())) {
			
			Swal.fire({
				title: "Tudo certo!",
				text: "CPF validado com sucesso!",
				icon: "success"
			});
			
		} else {
			
			Swal.fire({
				title: "Oops!",
				text: "CPF inválido!",
				icon: "error"
			});
			
		}
		
	});
	
	$("#btnLimparCalcDvCpf").on("click", function() {
		
		$("#txtCpf").val("");
		$("#txtDvCpf").val("");
		$("#btnValidarCpf").prop("disabled", true);
		$("#txtCpf").focus();
		
	});
	
	$("#btnCalcularDvCnpj").on("click", function() {
		
		if ($("#txtCnpj").val().length < 12) {
			
			Swal.fire({
				title: "Oops!",
				text: "É necessário informar os 12 primeiros dígitos do CNPJ!",
				icon: "error"
			});
			
		} else {
			
			let d1 = $("#txtCnpj").val().substring(0, 1);
			let d2 = $("#txtCnpj").val().substring(1, 2);
			let d3 = $("#txtCnpj").val().substring(2, 3);
			let d4 = $("#txtCnpj").val().substring(3, 4);
			let d5 = $("#txtCnpj").val().substring(4, 5);
			let d6 = $("#txtCnpj").val().substring(5, 6);
			let d7 = $("#txtCnpj").val().substring(6, 7);
			let d8 = $("#txtCnpj").val().substring(7, 8);
			let d9 = $("#txtCnpj").val().substring(8, 9);
			let d10 = $("#txtCnpj").val().substring(9, 10);
			let d11 = $("#txtCnpj").val().substring(10, 11);
			let d12 = $("#txtCnpj").val().substring(11, 12);
			
			let somaDv1 = (d1 * 6) + (d2 * 7) + (d3 * 8) + (d4 * 9) + (d5 * 2) + (d6 * 3) + (d7 * 4) + (d8 * 5) + (d9 * 6) + (d10 * 7) + (d11 * 8) + (d12 * 9);
			let dv1 = somaDv1 % 11;
			
			let somaDv2 = (d1 * 5) + (d2 * 6) + (d3 * 7) + (d4 * 8) + (d5 * 9) + (d6 * 2) + (d7 * 3) + (d8 * 4) + (d9 * 5) + (d10 * 6) + (d11 * 7) + (d12 * 8) + (dv1 * 9);
			let dv2 = somaDv2 % 11;
			
			$("#txtDvCnpj").val(dv1 + "" + dv2);
			
			$("#btnValidarCnpj").prop("disabled", false);
			
		}
		
	});
	
	$("#btnValidarCnpj").on("click", function() {
		
		if (validarCnpj($("#txtCnpj").val() + $("#txtDvCnpj").val())) {
			
			Swal.fire({
				title: "Tudo certo!",
				text: "CNPJ validado com sucesso!",
				icon: "success"
			});
			
		} else {
			
			Swal.fire({
				title: "Oops!",
				text: "CNPJ inválido!",
				icon: "error"
			});
			
		}
		
	});
	
	$("#btnLimparCalcDvCnpj").on("click", function() {
		
		$("#txtCnpj").val("");
		$("#txtDvCnpj").val("");
		$("#btnValidarCnpj").prop("disabled", true);
		$("#txtCnpj").focus();
		
	});
	
	$("#btnCalcularDvRg").on("click", function() {
		
		if ($("#txtRg").val().length < 8) {
			
			Swal.fire({
				title: "Oops!",
				text: "É necessário informar os 8 primeiros dígitos do RG!",
				icon: "error"
			});
			
		} else {
			
			let d1 = $("#txtRg").val().substring(0, 1);
			let d2 = $("#txtRg").val().substring(1, 2);
			let d3 = $("#txtRg").val().substring(2, 3);
			let d4 = $("#txtRg").val().substring(3, 4);
			let d5 = $("#txtRg").val().substring(4, 5);
			let d6 = $("#txtRg").val().substring(5, 6);
			let d7 = $("#txtRg").val().substring(6, 7);
			let d8 = $("#txtRg").val().substring(7, 8);
			
			let somaDv = (d1 * 9) + (d2 * 8) + (d3 * 7) + (d4 * 6) + (d5 * 5) + (d6 * 4) + (d7 * 3) + (d8 * 2);
			let dv = somaDv % 11;
			
			$("#txtDvRg").val(dv == 10 ? "X" : dv);
			
		}
		
	});
	
	$("#btnLimparCalcDvRg").on("click", function() {
		
		$("#txtRg").val("");
		$("#txtDvRg").val("");
		$("#txtRg").focus();
		
	});
	
});

/**
 * Função responsável pela validação de CPF's!
 */
function validarCpf(cpf) {
	var soma = 0;
    var resto;
	
	for (var i = 1; i <= 9; i++) {
        soma = soma + (parseInt(cpf.substring(i - 1, i)) * (11 - i));
    }
	
	resto = (soma * 10) % 11;
	
    if ((resto == 10) || (resto == 11))
        resto = 0;

    if (resto != parseInt(cpf.substring(9, 10)))
        return false;

    soma = 0;
	
    for (i = 1; i <= 10; i++) {
        soma = soma + (parseInt(cpf.substring(i - 1, i)) * (12 - i))
    };

    resto = (soma * 10) % 11;
	
    if ((resto == 10) || (resto == 11))
        resto = 0;

    if (resto != parseInt(cpf.substring(10, 11)))
        return false;

    return true;
}

/**
 * Função responsável pela validação de CNPJ's!
 */
function validarCnpj(cnpj) {
	var tam = cnpj.length - 2;
	var num = cnpj.substring(0, tam);
	var dig = cnpj.substring(tam);
	var pos = tam - 7;
	var soma = 0;
	
	for (var i = tam; i >= 1; i--) {
		soma += num.charAt(tam - i) * pos--;
		if (pos < 2) pos = 9;
	}
	
	var result = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (result != dig.charAt(0)) return false;
	
	tam = tam + 1;
	num = cnpj.substring(0, tam);
    pos = tam - 7;
	soma = 0;
	
	for (var i = tam; i >= 1; i--) {
		soma += num.charAt(tam - i) * pos--;
		if (pos < 2) pos = 9;
	}
	
	result = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (result != dig.charAt(1)) return false;
	
	return true;
}