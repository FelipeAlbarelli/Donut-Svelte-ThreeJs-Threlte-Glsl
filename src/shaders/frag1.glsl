  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float pulseTimer;

  uniform vec3 colorA;
  uniform vec3 colorB;
  
  varying vec2 vUv;
  
  varying vec3 vPosition;  
  void main(){
    float sumVuv = vUv.x + vUv.y;

    float sinedTime = sin(pulseTimer);


    gl_FragColor = vec4(mix(colorA, colorB,sinedTime ), 1.0);

  }
  
  