filename = ARGV.first

prompt = ">"
txt = File.open(filename)

puts "Here' your file: #{filename}"
puts txt.read()

puts "I'll also ask you to type it again:"
print prompt
file_again = STDIN.gets.chomp()

txt_ageain = File.open(file_again)

puts txt_ageain.read()