  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float pulseTimer;
  
  varying vec2 vUv;
  
  varying vec3 vPosition;  
  void main(){
    float sumVuv = vUv.x + vUv.y;

    float sinedTime = sin(pulseTimer);

      gl_FragColor=vec4(
          sinedTime,
          sinedTime,
          0.5,
      1.);
  }
  
  