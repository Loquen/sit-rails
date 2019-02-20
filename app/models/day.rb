class Day < ApplicationRecord
	validates :day, presence: true
	validates :time, presence: true
end
