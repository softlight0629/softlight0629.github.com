puts "Let's practice everything."
puts "You\'d need to konw \'about escapes with \\ that do \n newlines and \t tabs"

poem = <<MULTI_LINE_STRING

\tThe lovey world 
with logic so firmly
cannot descern \n the nneds of love 
nor comprehend passion from intuition
and requires an explanation
\n\t\twhere therer is none.

MULTI_LINE_STRING

puts "----------------------"
puts poem
puts "----------------------"

five = 10 -2 + 3 -6
puts "This should be five: #{five}"

def scret_formula(started)
	jelly_beans = started * 500
	jars = jelly_beans / 1000
	creates = jars / 100
	return jelly_beans, jars, creates
end

start_point = 10000
beans, jars, creates = scret_formula(start_point)

puts "With a staring point of : #{start_point}"
puts "We'd have #{beans}  beans, #{jars} jars, and #{creates} creates"

start_point = start_point / 10

puts "We can also do that this way:"
puts "We'd have %s beans, %s jars, and %s crates." % scret_formula(start_point)