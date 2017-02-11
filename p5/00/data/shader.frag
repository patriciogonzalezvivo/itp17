#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
        
    vec3 color = vec3(0.,0.,0.);
    color.rg = st;
    
    gl_FragColor = vec4(color,1.);
}