  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float pulseTimer;
  
  varying vec2 vUv;
  
  varying vec3 vPosition;  
  void main(){

      gl_FragColor=vec4(
          1,
          1,
          1,
      1.);
  }
  
  