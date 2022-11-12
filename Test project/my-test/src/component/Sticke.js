import React, { PureComponent } from "react";
import { Sticky, StickyContainer } from "react-sticky";

const containerBg = (i) => `hsl(${i * 40}, 70%, 90%)`;
const headerBg = (i) => `hsl(${i * 40}, 70%, 50%)`;

export class Stacked extends PureComponent {
  
  render() {
    const { style, renderCount, className } = this.props;
    return (
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <StickyContainer
            key={i}
            className="container"
            style={{ background: containerBg(i) }}
          >
            <Sticky>
              {({ style }) => (
                <h2>
                  <span className="pull-left">
                    {"<Sticky /> "}
                    {renderCount ? (
                      <small>(invocation: #{renderCount})</small>
                    ) : null}
                  </span>
                </h2>
              )}
            </Sticky>

            <h2 className="text-center">{`<StickyContainer #${i} />`}</h2>
          </StickyContainer>
        ))}
      </div>
    );
  }
}
