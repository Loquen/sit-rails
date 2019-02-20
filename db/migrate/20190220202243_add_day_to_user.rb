class AddDayToUser < ActiveRecord::Migration[5.2]
  def change
  	add_reference :days, :user, index: true, foreign_key: true
  end
end
