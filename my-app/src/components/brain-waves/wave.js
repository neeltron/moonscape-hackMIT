/**
 *	Wave JS
 *
 *	Description: Build a Sine wave on the canvas element, based on tweaks by the user.
 *	Author: RITESH KUKREJA
 *	Website: riteshkukreja.wordpress.com
 *	Github: https://github.com/riteshkukreja/sine-wave/
 *
 **/
 export default function Wave(config) {
    if (typeof config != "object" && typeof config.canvas == "undefined")
      throw "Provide a valid canvas element for the application."
  
    // Holds the canvas and context object
    var canvas = config.canvas
    var context = canvas.getContext("2d")
  
    // Frequency of the sine wave
    var frequency = config.frequency || 0.005
  
    // Phase given to the sine wave
    var phase = config.phase || 30
  
    // Amplitude of the sine wave
    var amplitude = config.amplitude || 50
  
    // Color of the wave
    var color = config.color || "tomato"
  
    // Phase shift at each animation keyframe
    var shift = config.shift || 10
  
    // Width of the sine wave, radius of the circles on the line
    var lineWidth = config.lineWidth || 4
  
    // number between 0-1: Damping factor
    var damping = typeof config.damping === "number" ? config.damping : 0.5
  
    // Position from wave to start drawing
    var origin = config.origin || {
      x: 0,
      y: canvas.height / 2
    }
  
    /**
     * Provide damping factor which ranges from 0 - 1 - 0.
     */
    const damp = (end, x, size) => {
      const effectiveValue = 1 - x / end
      return 2 * effectiveValue * (x / end) * size
    }
  
    /**
     *	Draw a single point on the canvas
     *	Uses arc() method of the context with radius 2
     *	Depending on the values of outline, fill and graient flags , it will draw a point on the wave
     **/
    const drawPoint = (x, y, color) => {
      var r = lineWidth / 2
      context.beginPath()
  
      // Draw circle on the wave
      context.fillStyle = color
      context.lineWidth = 2
      context.arc(x, y, r, 0, 2 * Math.PI)
      context.fill()
    }
  
    /**
     *	Build the entire sine wave using drawPoint()
     **/
    const buildSine = (wavelength, phase, color, amplitude, frequency) => {
      for (var i = origin.x; i < origin.x + wavelength; i++) {
        var y = amplitude * Math.sin(frequency * (i + phase))
  
        drawPoint(
          i,
          origin.y + damp(origin.x + wavelength, i, damping) * y,
          color
        )
      }
    }
  
    /**
     *	Utility Method
     *	Clear Method to clear the entire canvas
     **/
    const clear = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
    }
  
    /**
     *	Visualize the wave
     *	Main Calling Method of start of application
     *
     *	Config Object provides a temporary change in the nature of the wave and can be used to define animations
     **/
    const animate = () => {
      clear()
      phase += shift
      buildSine(canvas.width, phase, color, amplitude, frequency)
    }
  
    /**
     *	Re-animation Jutsu
     *	Draw once the wave on the canvas, used when multiple elements must be drawn simultaneously.
     *
     *	Config Object provides a temporary change in the nature of the wave and can be used to define animations
     **/
    const reanimate = () => {
      phase += shift
      buildSine(canvas.width, phase, color, amplitude, frequency)
    }
  
    /**
     *	Constructor Method
     **/
  
    this.redraw = () => {
      reanimate()
    }
  
    this.draw = () => {
      animate()
    }
  
    this.clearCanvas = () => {
      clear()
    }
  }