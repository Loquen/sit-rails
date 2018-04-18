require 'test_helper'

class TimerControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get timer_new_url
    assert_response :success
  end

end
