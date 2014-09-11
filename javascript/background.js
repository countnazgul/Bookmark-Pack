function copyToClipboard(text)
{
	var input = document.getElementById('url');
	
	if(input == undefined)
		return;
	
	input.value = text;					
	input.select();

	document.execCommand('copy', false, null);
}