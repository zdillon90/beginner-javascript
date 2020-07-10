const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  console.log('You clicked it');
  const shouldChangePAge = confirm('This website might be malicious');
  if (!shouldChangePAge) {
    event.preventDefault();
  }
});
