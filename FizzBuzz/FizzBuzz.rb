puts "FizzBuzz"
=begin
 For the multiples of 3, print "Fizz" instead of the number and for the multiples of 5, print "Buzz" instead of the number. 
 For numbers which are multiples of both 3 and 5 print "FizzBuzz"
=end


n = 1
until n > 100 do
	if n%3 == 0 && n%5 == 0
		puts "FizzBuzz"
	elsif n%3 == 0
		puts "Fizz"
	elsif n%5 == 0
		puts "Buzz"
	else
		puts n
	end
	n += 1
end