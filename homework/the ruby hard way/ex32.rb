the_count = [1, 2, 3, 4, 5]
fruites = ['apple', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# this first kind of for-loop goes throgh an array
for number in the_count
	puts "This is count #{number}"
end

# same as above, but using a block instead
fruites.each do |fruit|
	puts "A fruit of type: #{fruit}"
end

# also we can go through mixed arrays too
for i in change
	puts "I got #{i}"
end

# we can also build arrays, first start with an empty one
elements = []

# this use a range object to do 0 to 5 counts
for i in (0..5)
	puts "adding #{i} to the list."
	# push is a function that arrays understand
	elements.push(i)
end

# now we can puts them out too
for i in elements
	puts "Element was: #{i}"
end