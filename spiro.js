//The following script creates the path of motion for the 2 particles in 'ws_spiro_001.hpnic', the spirosphere project.
float Fr = ch("fixed_radius");
float Mr = ch("movable_radius");
float Sp = ch("speed")*@Time;
float Sc = ch("spiro_scale");
float Po = ch("pen_offset");

float Phi = (3.1416 * Sp)/2.0;

if(Mr == 0) Mr = 1;
if(Fr == 0) Fr = 1;

@P.x = ((Fr + Mr)*cos(Sp) - (Mr*Po)*cos(((Fr+Mr)/Mr)*Sp)) * Sc;
@P.y = ((Fr + Mr)*sin(Sp) - (Mr*Po)*sin(((Fr+Mr)/Mr)*Sp)) * Sc;

if(ch("z_depth") == 1) {
	@P.z = Phi;
}
