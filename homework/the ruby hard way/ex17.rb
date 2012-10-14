from_file, to_file = ARGV
script = $0

puts "Copying form #{from_file} tp #{to_file}"

#we could do these two on one line too, how?
input = File.open(from_file)
indata = input.read()

puts "The input file is #{indata.length} bytes long"

puts "Does the output file exist? #{File.exist? to_file}"
puts "Ready, hit RETRUN to continue, CTRL-C to abort."

STDIN.gets

output = File.open(to_file, 'w')
output.write(indata)

puts "Alright, all done"

output.close()
input.close()