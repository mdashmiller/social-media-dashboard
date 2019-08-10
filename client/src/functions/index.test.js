import * as myFunctions from './index'

describe('handleNavClick', () => {

  const mockHandleNavClick = jest.spyOn(myFunctions, 'handleNavClick')
  const mockSetView = jest.fn()

  it('invokes callback with correct parameters', () => {
    // on a mobile device
    mockHandleNavClick('mobile', 'inbox', 'news', mockSetView)
    expect(mockSetView).toHaveBeenCalledTimes(1)
    expect(mockSetView).toHaveBeenCalledWith('news')
    mockSetView.mockClear()

    // on desktop or tablet and user clicks button of the current view
    mockHandleNavClick('tablet', 'inbox', 'inbox', mockSetView)
    expect(mockSetView).toHaveBeenCalledTimes(1)
    expect(mockSetView).toHaveBeenCalledWith('')
    mockSetView.mockClear()

    // on desktop or tablet and user clicks button of a different view than the current one
    mockHandleNavClick('desktop', 'notifications', 'edit profile', mockSetView)
    expect(mockSetView).toHaveBeenCalledTimes(1)
    expect(mockSetView).toHaveBeenCalledWith('edit profile')
    mockSetView.mockClear()
  })

})
