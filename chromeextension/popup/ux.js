
// change image of the power button when clicked
document.addEventListener('DOMContentLoaded', function ()
{
  var powerButton = document.getElementById('powerOnOff');
  powerButton.onclick = function ()
  {
    if (document.getElementById('powerImg').getAttribute('src') == './images/powerOn.png')
    {
      document.getElementById('powerImg').src = './images/powerOff.png';
    }else
    {
      document.getElementById('powerImg').src = './images/powerOn.png';
    }
  };
});

// Open links in an active new tab
document.addEventListener('DOMContentLoaded', function ()
{
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++)
  {
    (function ()
    {
      var ln = links[i];
      var location = ln.href;
      ln.onclick = function ()
      {
          chrome.tabs.create({ active: true, url: location });
      };
    })();
  }
});
