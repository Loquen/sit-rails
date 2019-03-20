class TrackerController < ApplicationController
  def home
  	@user = current_user
  	@days = @user.days

  	@displayWeek = displayAll('Week')
  	@displayMonth = displayAll('Month')
  	#@displayYear = displayAll('Year')
  end

  # based on the period provided return
  def displayAll (period)
  	# We take only days that fall in week of Date.today.cweek
  	@daysFromWeek = []
  	@daysFromMonth = []
  	#@daysFromYear = []
  	@currentWeek = Date.today.cweek
  	@currentMonth = Date.today.month
  	@currentYear = Date.today.year
  	# iterate over all the days and add days from the current week
  	# save the time values from these
  	@days.each { |day|
  		if (period == 'Week' && day.day.cweek == @currentWeek)
  			@daysFromWeek.push(day.time)
  		end

  		if (period == 'Month' && day.day.month == @currentMonth)
  			#@time += 
  			@daysFromMonth.push(day.time)
  		end
  		# Year is going to be a little trickier
  		# We need to go through all the days and split them 
  		# by month. all date.month == 1 will go into a[0]...
  		#if period == 'Year' && day.day.year == @currentYear 
  	}

  	if period == 'Week'
  		return @daysFromWeek
  	elsif period == 'Month'
  		return @daysFromMonth
  	end

  end

  
end
