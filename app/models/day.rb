class Day < ApplicationRecord
	validates :day, presence: true
	validates :time, presence: true

	belongs_to :user
end
