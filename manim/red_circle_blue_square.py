from manim import *


class RedCircleBlueSquare(Scene):
    def construct(self):
        circle = Circle(radius=1.2, color=RED, fill_opacity=0.8).shift(LEFT * 2)
        square = Square(side_length=2.4, color=BLUE, fill_opacity=0.8).shift(RIGHT * 2)

        self.play(
            FadeIn(circle, scale=0.5),
            FadeIn(square, scale=0.5),
            run_time=1.5,
        )
        self.wait(1)
