

function powerClick()
{
  let x = document.getElementById('powerImg').src;
  if (document.getElementById('powerImg').src == 'file:///Users/mathisrenier/Documents/workspace/ondulation/ondulation/chromeExtension/popup/images/powerOn.png')
  {
    document.getElementById('powerImg').src = './images/powerOff.png';
  }else
  {
    document.getElementById('powerImg').src = './images/powerOn.png';
  }
}
